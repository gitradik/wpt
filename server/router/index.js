const express = require('express');
const router = express.Router();

const accountControllers = require('./controllers/account');
const accountMiddleware = require('./middleware/account');

router.get('/', accountControllers.createAccount);

module.exports = router;
