var express = require('express');
var app = express();

        app.get('/',function(req,res){
            res.send('<h1>Hello Express!! Basic Routing params</h1>');
        });

        app.get('/user/profile/:name',function(req,res){
            res.send('<h1>Your Profile '+req.params.name+'</h1>');
        });

        app.get('/user/profile/:id',function(req,res){
            res.send('<h1>Your Profile id: '+req.params.id+'</h1>');
        });


    app.listen(8081);

    function loading(){
        console.log('Server is running....')
    }


    console.log('Server running at localhost:8081');
    console.log('Application name : Testing Node JS');

    setInterval(loading,5000);