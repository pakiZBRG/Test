const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
// Handle CORS error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Mongo
mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

// Routes
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`))