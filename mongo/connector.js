const mongoose = require('mongoose');

const connect = (CONNECTION_URL) => {

	return new Promise((resolve, reject) => {

		mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {

			console.log(`[+] MONGODB CONNECTED TO ${CONNECTION_URL}`);
			resolve();

		}).catch(() => {

			console.log(`[-] MONGODB FAILED TO CONNECT ${CONNECTION_URL}`);
			process.exit(0)

		});

	});

}

module.exports = { connect }