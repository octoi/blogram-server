const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors()); // enabling cors 

app.get('/', (req, res) => res.status(200).send('Server is up 😎'));

// server listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`[+] SERVER STARTED ON PORT ${port}`);
})