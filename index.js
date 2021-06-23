const dotenv = require("dotenv");
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const userRoute = require('./routes/userRoute');
const blogRoute = require('./routes/blogRoute');

dotenv.config();
const app = express();

app.use(cors()); // enabling cors 
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/blog', blogRoute);

app.get('/', (req, res) => res.status(200).send('Server is up 😎'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`[+] SERVER STARTED ON PORT ${PORT}`);
})