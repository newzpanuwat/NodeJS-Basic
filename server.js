var http = require('http');
var fs = require('fs');
var myUser = {
    "name": "Panuwat",
    "job": "Software Developer",
    "Hometown": "Rayong",
    "age": 26
}




http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
   // var mySteam = fs.createReadStream(__dirname+"/"+'index.html','utf-8');
    //mySteam.pipe(res);

    // Display JSON Data
    res.end(JSON.stringify(myUser));

}).listen(8081,'127.0.0.1');

function loading(){
    console.log('Server is running....')
}


console.log('Server running at localhost:8081');
console.log('Application name : Testing Node JS');

setInterval(loading,5000);
