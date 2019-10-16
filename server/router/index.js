const express = require('express');
const router = express.Router();

const accountControllers = require('./controllers/account');
const accountMiddleware = require('./middleware/account');

router.post('/createAccount', accountMiddleware.hashPassword, accountMiddleware.setToken, accountControllers.createAccount);
router.get('/getAccount', accountMiddleware.verifyToken, accountControllers.getAccountByEmail);
router.post('/login', accountMiddleware.login, accountMiddleware.setToken, accountControllers.getAccountByEmail);

module.exports = router;
