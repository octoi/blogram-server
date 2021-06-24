const { model, Schema } = require('mongoose');

const ModelSchema = new Schema({
	title: String,
	createdAt: String,
	blog: String,
	user: String,
});

const blogModel = model('Blog', ModelSchema);

module.exports = blogModel