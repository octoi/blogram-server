const express = require('express');
const router = express.Router();
const { register, login, update } = require('../mongo/userHelper');
const { generateSuccessMessage } = require('../utils/generator');

router.post('/register', (req, res) => {

	register(req.body)
		.then(user => res.json(generateSuccessMessage(user)))
		.catch(err => res.json(err))

});

router.post('/login', (req, res) => {

	login(req.body)
		.then(user => res.json(generateSuccessMessage(user)))
		.catch(err => res.json(err))

});

router.put('/update', (req, res) => {

	update(req.body)
		.then(user => res.json(generateSuccessMessage(user)))
		.catch(err => res.json(err))

});

module.exports = router;