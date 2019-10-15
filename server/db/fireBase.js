const admin = require("firebase-admin");

const serviceAccount = require('./serviceAccount');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://wptapp-6ba1d.firebaseio.com"
});

module.exports = admin;






