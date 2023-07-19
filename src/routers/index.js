const { ENV } = require("../config/env")
const { checkCustomeAuth } = require('../middleware/checkCustomAuth')

/**
 * @function routes
 * @description 
 * @author `Sourabh`
 */
exports.routes = (app) => {
    app.use(ENV.API_V, checkCustomeAuth, require('../routers/user.js'))
}