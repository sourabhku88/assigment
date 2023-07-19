const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: Number,
        default: null,
    },
    email_otp: {
        type: Number,
        default: null,
    },


}, { timestamps: true, versionKey: false });


exports.User = mongoose.model('user', userSchema)