var response = require('./method');

console.log(response.update());
console.log(response.data);

response.data.DeleteUser();
response.data.UpdateData();

console.log(response.add(10.25644,20.645432));




