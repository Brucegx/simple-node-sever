var path = require('path');
var express = require('express');
var models = require('../data/models');
var restful = require('../restful/restful');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/restful', restful);

let port = 3000;

app.listen(port,() => {
    console.log('working right now');
})

