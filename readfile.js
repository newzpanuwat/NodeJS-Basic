var fs = require('fs') //Import module File System
var readMe = fs.readFileSync('code.txt','utf-8');

console.log(readMe);

