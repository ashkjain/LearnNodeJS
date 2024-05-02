// Importing fs common core module
const fs = require('fs');

// Reading file and a callback function, with error and data. If error occurs throw error otherwise display the data
// If works return a buffer data
fs.readFile('./files/starter.txt',(err,data) => {
    if(err) throw err;
    console.log(`Buffer Data: `,data);
});
// Now return the data in a string format (readable)
fs.readFile('./files/starter.txt',(err,data) => {
    if(err) throw err;
    console.log(`String Data: ${data.toString()}`);
});
// Declared Primitive type to return the data in such format which in this case is UTF-8
fs.readFile('./files/starter.txt','utf-8',(err,data) => {
    if(err) throw err;
    console.log("With Primitive Type: ",data);
});