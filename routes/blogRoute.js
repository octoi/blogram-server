const express = require("express");
const router = express.Router();
const { generateSuccessMessage } = require("../utils/generator");
const { fetchAll, fetchOne, fetchUserBlog, create, deleteBlog } = require('../mongo/blogHelper');

router.get('/', (req, res) => {

	fetchAll()
		.then(blogs => res.json(generateSuccessMessage(blogs)))
		.catch(err => res.json(err))

})

router.get('/:id', (req, res) => {

	const id = req.params.id;

	fetchOne(id)
		.then(blog => res.send(generateSuccessMessage(blog)))
		.catch(err => res.json(err))

});

router.get('/user/:user', (req, res) => {

	const user = req.params.user;

	fetchUserBlog(user)
		.then(blog => res.send(generateSuccessMessage(blog)))
		.catch(err => res.json(err))

});

router.post('/new', (req, res) => {

	create(req.body)
		.then((blog) => res.send(generateSuccessMessage(blog)))
		.catch(err => res.json(err))

});

router.delete('/:id', (req, res) => {

	const id = req.params.id;

	deleteBlog(req.body, id)
		.then((msg) => res.send(generateSuccessMessage(msg)))
		.catch(err => res.json(err))

});

module.exports = router;