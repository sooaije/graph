const express = require('express');
const path = require('path');
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

var prodServer = process.env.API_HOST;

// Constants
const PORT = 8000;
const app = express();

// App
app.use(express.static('./dist'));

app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});



app.listen(PORT);
console.log('Running on ' + PORT);