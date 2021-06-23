const express = require('express');
const cors = require("cors");

const userRoute = require("./routes/userRoute");
const blogRoute = require('./routes/blogRoute');

const app = express();

// MIDDLEWARE
app.use(cors()); // enabling cors 

app.use('/user', userRoute);
app.use('/blog', blogRoute);

// ROUTE
app.get('/', (req, res) => res.status(200).send('Server is up 😎'));

// LISTENER
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`[+] SERVER STARTED ON PORT ${port}`);
})