const { ENV } = require("../config/env");
const { serverError, unAuthError } = require("../util/response")


exports.checkCustomeAuth = async (req, res, next) => {
    try {
        const authkey = req.headers['authkey'];

        if (!authkey) return unAuthError(res)

        if (ENV.CUSTOM_AUTH !== authkey) return unAuthError(res)

        next()
    } catch (error) {
        return serverError(res)
    }
}