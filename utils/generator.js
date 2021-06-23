require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateErrorMessage = message => {
	return {
		status: 404,
		message,
	}
}

const generateToken = user => {
	return jwt.sign({
		id: user.id,
		username: user.username,
		name: user.name,
	}, process.env.JWT_KEY, { expiresIn: '1h' });
}

module.exports = { generateErrorMessage, generateToken }