//console.log(__dirname);
//console.log(__filename);



function printHello(){
    console.log('Hello world!!');
}

function printBoat2(){
    console.log('Boat2');
}
var t = setTimeout(printHello,2000);

clearTimeout(t);

setInterval(printBoat2, 2000);