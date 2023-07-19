const mongoose = require('mongoose');
const { ENV } = require('./env');


exports.connectDB = async () => {
    try {
        await mongoose.connect(ENV.DB_URL);
        console.log(`DB connected!`)
    } catch (error) {
        console.log(error)
    }
}