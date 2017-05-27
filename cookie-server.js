var express = require('express');
var cookie = require('cookie-parser');
var body = require('body-parser');

var app = express();

app.use(cookie());
app.use(body());
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index')
});

app.get('/createCookie',function(req,res){
    res.cookie('myCookie','Panuwat');
    res.end('The Cookie was created successful!!!');
});


app.get('/delCookie',function(req,res){
    res.clearcookie('myCookie');
    res.end('Deleted Cookie Completed');
});



app.listen(8081);

console.log('Server is Running....')