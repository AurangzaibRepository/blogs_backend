const express = require('express')
const cors = require('cors');
require('dotenv').config();
const config = require('./config');

const app = express();

const corsOptions = {
    origin: config.cors_origin_url,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Base route');
});

const PORT = config.application_port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});