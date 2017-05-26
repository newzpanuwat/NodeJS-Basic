// Pipe is the way to read and write the data on the same time.

var fs = require('fs');

var readerSteam = fs.createReadStream('code.txt');
var writerStream = fs.createWriteStream('file1.txt');

readerSteam.pipe(writerStream);