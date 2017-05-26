var fs = require('fs');
var readMe = fs.readFileSync('code.txt',readMe)


//Create Directory
fs.mkdir('Project',function(){
    fs.writeFileSync('Project/Readme.txt',readMe)
});
