const db = require('../../../db/fireBase');

module.exports.createAccount = function (req, res, next) {
    const usersRef = db.collection('users');
    usersRef.get()
        .then(documentSet => {
            documentSet.forEach(doc => {
                console.log(doc.id, ' => ', doc.data());
                res.send(doc.data());
            });
        })
        .catch(err => {
            // res.send(err);
        });
};
