'use strict';
const express = require('express');
const notFoundHandler = require('../handlers/404');
const errorHandler = require('../handlers/500');
const logger = require('../middlewares/logger') 
const validator = require('../middlewares/validator') 

const app = express();

app.use(logger);
app.get("/", (req, res) => {
    res.status(200).send('Hello User');
});

app.get("/person", validator(), (req, res) => {
  res.status(200).json({
      Name:`${req.query.name}`
});
});

app.get("/data", (req, res) => {
    res.json({
        id: 1,
        name: 'Ahmad Ijmail',
        email: 'ahmadijmil2010@gmail.com'
    });
});


app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
        console.log(`testing port ${port}`);
    });
}
module.exports = {
    app: app,
    start: start,
}