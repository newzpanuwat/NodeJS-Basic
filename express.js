var express = require('express');
var routing = express();

routing.get('/',function(req,res){
    res.send('<h1>Hello Express!! </h1>');
});

routing.listen(8081);

function loading(){
    console.log('Server is running....')
}


console.log('Server running at localhost:8081');
console.log('Application name : Testing Node JS');

setInterval(loading,5000);