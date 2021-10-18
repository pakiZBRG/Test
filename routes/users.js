const express = require('express');
const { createAccount, login } = require('../controllers/users');
const router = express.Router();
const { validRegister, validLogin } = require("../helpers/Validation");

router.post('/register', validRegister, createAccount);

router.post('/login', validLogin, login);

module.exports = router;