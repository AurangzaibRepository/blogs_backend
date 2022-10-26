const config = {
    application_port: process.env.APPLICATION_PORT,
    cors_origin_url: process.env.CORS_ORIGIN_URL,
    DB: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
    }
};

module.exports = config;