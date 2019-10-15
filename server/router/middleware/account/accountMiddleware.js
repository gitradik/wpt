const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_TOKEN = "wptApp";

module.exports.hashPassword = async function (req, res, next) {
    if (req.body.hasOwnProperty("password")) {
        req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(8));
        await next();
    } else {
        next({type: "account_data"});
    }
};

module.exports.setToken = async function (req, res, next) {
    if(req.body.hasOwnProperty('email')) {
        req.headers.token = await jwt.sign({uid: req.body.email, type: 'access'}, SECRET_TOKEN, {expiresIn: '2h'});
        next();
    } else {
        next({type: "account_data"});
    }
};

module.exports.verifyToken = async function (req, res, next) {
    try {
        const accessToken = await jwt.verify(req.headers.access_token, SECRET_TOKEN);
        if (accessToken.exp > Date.now() / 1000) {
            req.headers.email = accessToken.uid;
            next();
        } else {
            next({ type: "unregistered" });
        }
    } catch (e) {
        next({ type: "unregistered" });
    }
};
