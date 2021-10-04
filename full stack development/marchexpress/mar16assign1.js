
var createError = require('http-errors'); 
var express = require('express'); 
var app = express(); 
   
app.use((req, res, next) => { 
  if (!req.user) return next( 
    createError(401, 'Login Requried!!')); 
  next(); 
}); 
  
app.listen(8080, (err) => { 
    if (err) console.log(err); 
    console.log( 
`Server Running at http://localhost:8080`); 
}); 