// Creating Functions
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

// Exporting those function by packing them in a module
module.exports = {add, subtract, multiply, divide}

// We can also export by directly using exports with the function
exports._add = (a,b) => a + b;
exports._subtract = (a,b) => a - b;
exports._multiply = (a,b) => a * b;
exports._divide = (a,b) => a / b;