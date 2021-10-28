const express = require('express');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const path = require('path');
require('dotenv').config()

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

const roadblocksController = require('./controllers/roadblocksController.js');
const hubController = require('./controllers/hubController')

app.get('/roadblocks', roadblocksController.getRoadblocks)
app.get('/hub', hubController.getXP)

if (process.env.NODE_ENV === 'production') {
    const staticFileMiddleware = express.static(path.join(__dirname + '/public/'));

    app.use(staticFileMiddleware);
    app.use(history({
        disableDotRule: true,
        verbose: true
    }));
    app.use(staticFileMiddleware);
    app.get('/', (req, res) => res.render(path.join(__dirname + '/public/index.html')));
}

module.exports = app;