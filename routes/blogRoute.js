const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
	// send all blogs
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