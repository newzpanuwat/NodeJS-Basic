//Convert buffer to JSON

var buffer = new Buffer('NEWZPANUWAT');
var buffer2 = new Buffer('BOONROD');
var buffer3 = Buffer.concat([buffer,buffer2]);

var json = buffer.toJSON(buffer);

console.log(json)


console.log(buffer3.toString());

