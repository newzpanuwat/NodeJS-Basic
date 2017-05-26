var http = require('http');
var fs = require('fs');
var myUser = {
    "name": "Panuwat",
    "job": "Software Developer",
    "Hometown": "Rayong",
    "age": 26
}




http.createServer(function(req,res){
    if (req.url === '/home' || req.url === '/'){
         res.writeHead(200,{'Content-Type':'text/html'});
            var mySteam = fs.createReadStream(__dirname+"/"+'index.html','utf-8');
                mySteam.pipe(res);
    }

        else if (req.url === '/facebook'){
            res.writeHead(200,{'Content-Type':'text/html'});
                var mySteam = fs.createReadStream(__dirname+"/"+'facebook.html','utf-8');
                    mySteam.pipe(res);
        }

            else if (req.url === '/youtube'){
                res.writeHead(200,{'Content-Type':'text/html'});
                    var mySteam = fs.createReadStream(__dirname+"/"+'youtube.html','utf-8');
                        mySteam.pipe(res);
            }

                    else {
                        res.writeHead(404,{'Content-Type':'text/html'});
                            var mySteam = fs.createReadStream(__dirname+"/"+'404notfound.html','utf-8');
                                mySteam.pipe(res);
                    }
        

    // Display JSON Data
    //res.end(JSON.stringify(myUser));

}).listen(8081,'127.0.0.1');

function loading(){
    console.log('Server is running....')
}


console.log('Server running at localhost:8081');
console.log('Application name : Testing Node JS');

setInterval(loading,5000);
