const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const router = require('./router');

const admin = require("firebase-admin");

const serviceAccount = require('./serviceAccount');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://wptapp-6ba1d.firebaseio.com"
});

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port);
