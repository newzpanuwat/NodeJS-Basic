//var buffer = new Buffer('NewzPanuwat');
//console.log(buffer.toString());



//var buffer = new Buffer(200);
//len = buffer.write('NEWPANUWAT');

//console.log(buffer.toString());


var buffer = new Buffer(26);
for (var i = 0; i< 26; i++) {
    buffer[i] = i+97;
    
}


console.log(buffer.toString('utf-8'));
console.log(buffer.toString('ascii'));


