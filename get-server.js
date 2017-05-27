var express = require('express')
var app = express();

app.set ('view engine', 'ejs');

app.get ('/showform',function(req,res){
    res.sendFile(__dirname+"/"+"showform.html")
});

app.get ('/showData',function(req,res){
    data= {
        fname : req.query.fname,
        lname : req.query.lname
    };
    console.log(data);
    res.end(JSON.stringify(data));
});



app.listen(8081);

console.log('Server is running..')