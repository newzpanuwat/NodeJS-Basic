var express = require('express');
var app = express();

        app.get('/',function(req,res){
            console.log("Request:" +new Date(), req.method, req.url);
            res.send('<h1>Hello Express!! Basic Routing params</h1>');
        });

        app.use('/user/profile/:name',function(req,res,next){
            console.log("Request:" +new Date(), req.method, req.url);
            res.send('<h1>Profile:'+require.params.name+ '</h1>');
        });





    app.listen(8081);

    function loading(){
        console.log('Server is running....')
    }


    console.log('Server running at localhost:8081');
    console.log('Application name : Testing Node JS');

    setInterval(loading,5000);