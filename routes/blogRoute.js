const express = require("express");
const router = express.Router();
const { generateSuccessMessage } = require("../utils/generator");
const { fetchAll } = require('../mongo/blogHelper');

router.get('/', (req, res) => {

	fetchAll()
		.then(blogs => res.json(generateSuccessMessage(blogs)))
		.catch(err => res.json(err))

})

router.get('/:id', (req, res) => {
	// send a specific blog
});

router.get('/user/:user', (req, res) => {
	// send all blogs of an user
});

router.post('/new', (req, res) => {
	// create new blog
});

router.delete('/:id', (req, res) => {
	// delete blog
});

module.exports = router;