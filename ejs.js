var express = require('express')
var app = express();

app.set ('view engine', 'ejs');

app.get ('/',function(req,res){
    var data = {name: "Boat Angkana",age: 20,job: "Programmer"};
    res.render('profile',{user:data});
});

app.get ('/contact',function(req,res){
    res.render('contact');
});


app.get ('/database',function(req,res){
    res.render('database');
});




app.listen(8081);

console.log('Server is running..')