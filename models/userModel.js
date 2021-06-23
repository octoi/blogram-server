const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
	name: String,
	username: String,
	password: String
});

const userModel = model('User', UserSchema);

module.exports = userModel