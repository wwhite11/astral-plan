module.exports = (req, res, next) => {
    const { TOKEN_KEY } = require('../controllers/index.js')
    console.log('token key from restrict:', TOKEN_KEY);
	const jwt = require('jsonwebtoken')
	try {
		const token = req.headers.authorization.split(' ')[1]
		const data = jwt.verify(token, TOKEN_KEY)
		res.locals.user = data // Used for assigning an item to a user, we won't be using this for this excercise
		console.log(res.locals.user)
		next()
	} catch (error) {
		console.log(error)
		res.status(403).send('Unauthorized')
	}
}