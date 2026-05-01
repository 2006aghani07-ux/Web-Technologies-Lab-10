const fs = require('fs');
const path = require('path');

// --- WRITE a file ---
fs.writeFileSync('notes.txt', 'Hello! This text was written by Node.js!');
console.log('File created!');

// --- READ a file ---
const content = fs.readFileSync('notes.txt', 'utf8');
console.log('File says: ' + content);

// --- CHECK if file exists ---
const exists = fs.existsSync('notes.txt');
console.log('File exists? ' + exists);

// --- PATH module ---
console.log('Current folder: ' + __dirname);
console.log('Full path: ' + path.join(__dirname, 'notes.txt'));
