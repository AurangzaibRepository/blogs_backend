require('dotenv').config();

const config = {
    application_port: process.env.APPLICATION_PORT,
    cors_origin_url: process.env.CORS_ORIGIN_URL,
};

module.exports = config;