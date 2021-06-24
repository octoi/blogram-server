const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { generateErrorMessage, generateToken } = require('../utils/generator');

module.exports = {

	get: (id) => {
		return new Promise(async (resolve, reject) => {
			try {

				const userRes = await User.findById(id);

				if (!userRes) reject(generateErrorMessage('Mo such user'));

				const data = {
					username: userRes.username,
					name: userRes.name,
					id: userRes._id,
				}

				resolve(data);

			} catch (err) {

				console.log(`[-] FAILED TO FETCH USER ${id}`)
				reject(generateErrorMessage(err.message))

			}
		});
	},

	register: ({ username, name, password }) => {
		return new Promise(async (resolve, reject) => {
			try {

				const oldUser = await User.findOne({ username });

				if (oldUser) reject(generateErrorMessage('There is an user with same username'));

				password = await bcrypt.hash(password, 12); // hashing password

				const newUser = new User({ username, name, password });

				const userRes = await newUser.save();

				const token = generateToken({
					...userRes._doc,
					id: userRes._id
				});

				const data = {
					username: userRes.username,
					name: userRes.name,
					id: userRes._id,
					token
				}

				resolve(data);

			} catch (err) {

				console.log(`[-] FAILED TO REGISTER USER`)
				reject(generateErrorMessage(err.message))

			}
		});
	},

	login: ({ username, password }) => {
		return new Promise(async (resolve, reject) => {

			try {

				const user = await User.findOne({ username });

				if (!user) reject(generateErrorMessage('No such user'));

				const match = await bcrypt.compare(password, user.password);

				if (!match) reject(generateErrorMessage('Incorrect password'));

				const token = generateToken({
					...user._doc,
					id: user._id
				});

				const data = {
					username: user.username,
					name: user.name,
					id: user._id,
					token
				}

				resolve(data);

			} catch (err) {

				console.log(`[-] FAILED TO LOGIN USER`)
				reject(generateErrorMessage(err.message))

			}

		});
	},

	update: ({ username, newUsername, password, newPassword, name, newName }) => {
		return new Promise(async (resolve, reject) => {

			try {

				const user = await User.findOne({ username });

				if (!user) reject(generateErrorMessage('No such user'));

				const match = await bcrypt.compare(password, user.password);

				if (!match) reject(generateErrorMessage('Incorrect password'));

				newPassword = await bcrypt.hash(newPassword, 12);

				user.username = newUsername;
				user.name = newName;
				user.password = newPassword;

				const userRes = await user.save();

				const token = generateToken({
					...userRes._doc,
					id: userRes._id
				});

				const data = {
					username: user.username,
					name: user.name,
					id: user._id,
					token
				}

				resolve(data);

			} catch (err) {

				console.log(`[-] FAILED TO UPDATE USER`)
				reject(generateErrorMessage(err.message))

			}

		});
	}

}