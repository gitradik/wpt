const usersRef = require('../../../db/fireBase').collection('users');

module.exports.createAccount = function (req, res, next) {
    usersRef.get()
        .then(documentSet => {
            documentSet.forEach(doc => {
                const user = {
                    id: doc.id,
                    email: doc.data()['email'],
                };
                res.send(user);
            });
        })
        .catch(err => {
            // res.send(err);
        });
};
