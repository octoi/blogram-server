const Blog = require('../models/blogModel');
const { generateErrorMessage } = require('../utils/generator');
const { login } = require('./userHelper');

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
	},

	create: ({ title, blog, username, password }) => {
		return new Promise((resolve, reject) => {
			try {

				login({ username, password })
					.catch((err) => reject(generateErrorMessage(err.message)))
					.then(async (userData) => {

						if (!userData) return;

						const newBlog = new Blog({
							title,
							blog,
							createdAt: Date.now(),
							user: userData?.id,
						});

						const blogRes = await newBlog.save();

						const data = {
							title: blogRes.title,
							blog: blogRes.blog,
							id: blogRes._id,
							createdAt: blogRes.createdAt,
							user: blogRes.user,
						}

						resolve(data);

					});

			} catch (err) {

				console.log('[-] FAILED TO CREATE NEW BLOG');
				reject(generateErrorMessage('Failed to create blog !'));

			}
		});
	}

}