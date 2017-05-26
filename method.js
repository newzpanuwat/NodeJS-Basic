var pi=3.14;
var obj = {}

obj.Attr = 1;

obj.Attr2 = "Hi this is attribute!"


obj.UpdateData = function(){
    console.log("Updated Data");
}

obj.DeleteUser = function(){
    console.log("Deleted User....");
}

var update = function(){
    return "Updating Server...."
}

var add = function(a,b){
    return a+b;
}

exports.pi = pi;
exports.add = add;
exports.update = update;

exports.data = obj
