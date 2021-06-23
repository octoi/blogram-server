const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { generateErrorMessage, generateToken } = require('../utils/generator');

module.exports = {

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
					...userRes.doc,
					id: userRes._id,
					token
				}

				resolve(data);

			} catch (err) {

				console.log(`[-] FAILED TO REGISTER USER`)
				reject(generateErrorMessage(err.message))

			}
		});
	}

}