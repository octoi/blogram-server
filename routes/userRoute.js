const express = require('express');
const router = express.Router();
const { register } = require('../mongo/userHelper');
const { generateSuccessMessage } = require('../utils/generator');

router.post('/register', (req, res) => {

	register(req.body).then(user => {

		res.json(generateSuccessMessage(user));

	}).catch(err => {

		res.json(err)

	})

});

router.post('/login', (req, res) => {
	// login user
});

router.put('/update', (req, res) => {
	// update user
});

module.exports = router;