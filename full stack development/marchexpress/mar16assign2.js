var express = require('express');
var cookieParser = require('cookie-parser'); // module for parsing cookies
var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
    // setting cookies
    res.cookie('username', 'Ashish H', { maxAge: 900000, httpOnly: true });
    return res.send('Cookie has been set');
});

app.get('/getcookie', function(req, res) {
    var username = req.cookies['username'];
    if (username) {
        return res.send(username);        
    }

    return res.send('No cookie found');
});

app.listen(8000);