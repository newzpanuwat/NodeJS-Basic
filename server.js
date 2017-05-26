var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var mySteam = fs.createReadStream(__dirname+"/"+'index.html','utf-8');
    mySteam.pipe(res);

}).listen(8081,'127.0.0.1');

console.log('Server running at localhost:8081');
console.log('Application name : Testing Node JS');