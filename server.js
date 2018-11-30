var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var http = require('http');


var app = express();
var httpServer = http.Server(app);
require('./io')(httpServer);

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(require('./config/auth'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profiles', require('./routes/api/profiles'));


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3001;

httpServer.listen(port, function () {
    console.log(`listening on port ${port}`);
});