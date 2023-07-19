const jwt = require('jsonwebtoken')
const { ENV } = require('../config/env')



/**
 * @function createToken
 * @description function to create token
 * @author `Sourabh`
 */
exports.createToken = (data) => {
    return jwt.sign(data, ENV.JWT_SECRET, { expiresIn: ENV.JWT_EXPIRE_TIME })
}