exports.STATUS_CODE = {
    SUCCESS: 200,
    CLIENT_ERROR: 400,
    UNAUTH: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
}

/**
 * @function successResponse
 * @description function to send success response
 * @author `Sourabh`
 * @returns res.status(200).json({ status: true, 'All ok!', [] }
 */
exports.successResponse = (res, msg = 'All ok!', result = []) => res.status(this.STATUS_CODE.SUCCESS).json({ status: true, msg, result })

/**
 * @function clientError
 * @description function to send client error response
 * @author `Sourabh`
 * @returns res.status(400).json({ status: false, 'invalid data!', [] }
 */
exports.clientError = (res, msg = 'invalid data!', result = []) => res.status(this.STATUS_CODE.CLIENT_ERROR).json({ status: false, msg, result })

/**
 * @function notFoundError
 * @description function to send not found error response
 * @author `Sourabh`
 * @returns res.status(404).json({ status: false, 'Data not found, [] }
 */
exports.notFoundError = (res, msg = 'Data not found!', result = []) => res.status(this.STATUS_CODE.NOT_FOUND).json({ status: false, msg, result })

/**
 * @function unAuthError
 * @description function to send unauthorize error response
 * @author `Sourabh`
 * @returns res.status(401).json({ status: false, 'unauthorize', [] }
 */
exports.unAuthError = (res, msg = 'unauthorize!', result = []) => res.status(this.STATUS_CODE.UNAUTH).json({ status: false, msg, result })

/**
 * @function serverError
 * @description function to send server error response
 * @author `Sourabh`
 * @returns res.status(500).json({ status: false, 'try again later', [] }
 */
exports.serverError = (res, msg = 'try again later!', result = []) => res.status(this.STATUS_CODE.SERVER_ERROR).json({ status: false, msg, result })