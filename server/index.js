const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./router');
const errorHandler = require('./utils/errors/errorHandler');

require('./db/fireBase');

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT);

