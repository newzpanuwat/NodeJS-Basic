var fs = require('fs');
var data = ' NewzPanuwat Node JS Express, Angular Js , React';

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'utf-8');

writerStream.end();
writerStream.on('finish',function(){
    console.log('Output Finished!!');
});




