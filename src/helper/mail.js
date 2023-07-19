const nodemailer = require('nodemailer');
const { ENV } = require('../config/env');



exports.sendMail = async (subject, text, mail) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: ENV.GMAIL_ID,
                pass: ENV.PASS
            }
        });

        await transporter.sendMail({
            from: ENV.GMAIL_ID,
            to: mail,
            subject: subject,
            text: text,
        });

        return true

    } catch (error) {
        return false
    }
}