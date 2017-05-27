var express = require('express')
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser());


app.set ('view engine', 'ejs');

app.get ('/showform',function(req,res){
    res.sendFile(__dirname+"/"+"showform.html")
});

app.post ('/showData',function(req,res){
    data = {
        fname : req.body.fname,
        lname : req.body.lname
    };
    console.log(data);
   // res.end(JSON.stringify(data));
    res.end('<h1>'+data.fname+'</h1>');
});



app.listen(8081);

console.log('Server is running..')