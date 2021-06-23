const generateErrorMessage = message => {
	return {
		status: 404,
		message,
	}
}


module.exports = { generateErrorMessage }