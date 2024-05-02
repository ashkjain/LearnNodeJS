// The console in the terminal window
console.log("Hello World")

// Global object instead of Window object
console.log(global);

// has Common core modules that we will explore
// CommonJS modules intead of ES6 modules

const os = require('os');
const path = require('path');
console.log(os.type()); // operating system type
console.log(os.version()); // operating system version
console.log(os.homedir()) // operating system home directory, or installed directory

console.log(__dirname); // Current Directory
console.log(__filename); // File name or file directory with name

console.log(path.dirname(__filename)); // Same but using Path
console.log(path.basename(__filename)); // exact name of the file with the extension 'server.js'
console.log(path.extname(__filename)); // just returns the extension name, for this file '.js'

console.log(path.parse(__filename)); // Returns object with: root directory, current directory, file basename, file extension, file name


const math = require('./math'); // Importing the module that just created in this directory (math.js)
const {add, subtract, multiply, divide} = require('./math'); // Deconstructed and just calling the function directly instead of using object

console.log(math.add(2,3));
console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));