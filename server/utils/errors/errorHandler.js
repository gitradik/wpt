const errors = require('./applicationErrors');
const errorTypes = require('./errorTypes');

module.exports = (err, req, res, next) => {
    const error = new errors[errorTypes[err.type]]();
    res.status(error.status).send(error);
};
