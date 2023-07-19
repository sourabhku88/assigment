const route = require('express').Router();


const user = require('../controllers/user')

route.post('/create-user', user.createUser)
route.post('/send-mail', user.sendToMail)
route.post('/verify-email-otp', user.verify)


module.exports = route