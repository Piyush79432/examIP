// var express = require('express');
// var app = express();
// app.get('/', 
// function(req, res){
//    res.cookie('name', 'express').send('cookie set'); 
// });
// app.listen(3000);
var express = require('express');
 var app= express();
 app.get('/',
 function(req,res){
    res.cookie('Piyush','Cookie1').send('Cookie set');
 });


//DElete cookie ka
var express = require('express');
var app = express();
app.get('/clear_cookie_foo', 
function(req, res){
   res.clearCookie('Piyush').send('cookie foo cleared');
});
app.listen(3002);

