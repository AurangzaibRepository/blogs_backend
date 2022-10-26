const express = require('express')
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://127.0.0.1:3000',
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Base route');
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});