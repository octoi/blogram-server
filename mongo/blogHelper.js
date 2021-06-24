const Blog = require('../models/blogModel');
const { generateErrorMessage } = require('../utils/generator');

module.exports = {

	fetchAll: () => {
		return new Promise(async (resolve, reject) => {
			try {

				const blogs = await Blog.find();
				resolve(blogs);

			} catch (err) {

				console.log('[-] FAILED TO FETCH BLOGS');
				reject(generateErrorMessage('Failed to fetch blogs !'));

			}
		});
	},

	fetchOne: (id) => {
		return new Promise(async (resolve, reject) => {
			try {

				const blog = await Blog.findById(id)
				resolve(blog);

			} catch (err) {

				console.log(err)

				console.log(`[-] FAILED TO FETCH BLOG WITH ID ${id}`);
				reject(generateErrorMessage('Failed to fetch blog !'));

			}
		});
	}

}