const { User } = require('../models/user');
const { serverError, clientError, successResponse, notFoundError } = require('../util/response')
const { createToken } = require('../helper/createToken');
const { sendMail } = require('../helper/mail');

/**
 * @function createUser
 * @description function to create user
 * @method `POST`
 * @author `Sourabh`
 */
exports.createUser = async (req, res) => {
    try {
        if (!req.body.email) return clientError(res, 'Please Provide email');
        if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(req.body.email)) return clientError(res, 'Please Provide Valid Email!')
        if (!req.body.first_name) return clientError(res, 'Please Provide first_name!');
        if (!req.body.last_name) return clientError(res, 'Please Provide last_name!');
        if (!req.body.phone) return clientError(res, 'Please Provide phone!');

        const user = await User.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] });

        if (user) return clientError(res, 'User already exists!')

        await User.create(req.body);

        return successResponse(res, 'User created!')
    } catch (error) {
        return serverError(res)
    }
}

/**
 * @function sendMail
 * @description function to send mail 
 * @method `POST`
 * @author `Sourabh`
 */
exports.sendToMail = async (req, res) => {
    try {
        if (!req.body.email) return clientError(res, 'Please Provide Email!')
        if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(req.body.email)) return clientError(res, 'Please Provide Valid Email!')

        const user = await User.findOne({ email: req.body.email });

        if (!user) return notFoundError(res, 'User Not Found!');

        const otp = Math.floor((Math.random() * 9000) + 1000);

        const sentMailRes = await sendMail(`Mail for Varification!`, `Your Varification code ${otp} please don't share with anyone.`, user.email)

        if (!sentMailRes) return clientError(res, 'there is some issue. please try after some time!')

        await User.updateOne({ email: req.body.email }, { email_otp: otp });

        return successResponse(res, 'OTP sent on your mail!')
    } catch (error) {
        return serverError(res)
    }
}

/**
 * @function sendMail
 * @description function to send mail 
 * @method `POST`
 * @author `Sourabh`
 */
exports.verify = async (req, res) => {
    try {
        if (!req.body.email) return clientError(res, 'Please Provide Email!')
        if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(req.body.email)) return clientError(res, 'Please Provide Valid Email!')
        if (!req.body.otp) return clientError(res, 'Please provide otp!')

        const user = await User.findOne({ email: req.body.email });

        if (!user) return notFoundError(res, 'User Not Found!');

        if (req.body.otp != user.email_otp) return clientError(res, 'invalid otp!');

        const token = createToken({ _id: user._id, email: user.email })

        return successResponse(res, 'login successfully!', token)
    } catch (error) {
        return serverError(res)
    }
}