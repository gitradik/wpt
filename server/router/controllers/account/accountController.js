const admin = require('../../../db/fireBase');
const db = admin.database();

module.exports.createAccount = function (req, res, next) {
    const { email, password } = req.body;
    try {
        const ref = db.ref("server/saving-data");
        const usersRef = ref.child("users");
        usersRef
            .push({ email, password })
            .then(() => res.send({ email, token: req.headers.access_token }))
            .catch(err => res.send(err));
    } catch (e) {
        next({ type: "account_data" });
    }
};

module.exports.getAccountByEmail = function (req, res, next) {
    try {
        db.ref('server/saving-data/users')
            .orderByChild("email")
            .equalTo(req.headers.email)
            .on('value', function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                   // const key = childSnapshot.key;
                    const childData = childSnapshot.val();
                    res.send({
                        email: childData.email,
                        token: req.headers.access_token,
                    });
                });
            });
    } catch (e) {
        next({ type: "account_not_found" });
    }
};
