const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_TOKEN = "wptApp";
const admin = require('../../../db/fireBase');
const db = admin.database();
const _ = require('lodash');

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
        req.headers.access_token = await jwt.sign({uid: req.body.email, type: 'access'}, SECRET_TOKEN, {expiresIn: '2h'});
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

module.exports.login = async function (req, res, next) {
    const { email, password } = req.body;
    try {
        const ref = db.ref('server/saving-data/users');
        const snapshot = await ref.once('value');
        const value = snapshot.val();
        const values = _.values(value);
        const acc = await values.find(el => el.email === email);
        if(!_.isUndefined(acc)) {
            const isValidPassword = await bcrypt.compare(password, acc.password);
            if(isValidPassword) {
                req.headers.email = acc.email;
                await next();
            } else {
                next({ type: "account_data" });
            }
        } else {
            next({ type: "account_not_found" });
        }
    } catch (err) {
        next({ type: "account_not_found" });
    }
};
