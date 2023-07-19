require('dotenv').config();



exports.ENV = {
    NODE_ENV: process.env.NODE_ENV,
    API_V: process.env.API_V,
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,
    CUSTOM_AUTH: process.env.CUSTOM_AUTH,
    GMAIL_ID: process.env.GMAIL_ID,
    PASS: process.env.PASS
}