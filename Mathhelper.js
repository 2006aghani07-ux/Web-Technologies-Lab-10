// mathHelper.js — this is a CUSTOM MODULE
// These are just regular functions
function add(a, b) {
return a + b;
}
function subtract(a, b) {
return a - b;
}
function greet(name) {
return 'Hello,' + name + '! Welcome to Node.js!';
}
// module.exports is HOW we share things with other files
// Without this line, other files CANNOT use these functions
module.exports = { add, subtract, greet };
