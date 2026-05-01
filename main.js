// main.js — we import our custom module
// &#39;./&#39; means look in the CURRENT folder
// No need to write &#39;.js&#39; at the end — Node adds it automatically
const math = require('./mathHelper');
// Now use the functions
console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(20, 7)); // Output: 13
console.log(math.greet('Sara')); // Output: Hello, Sara!
