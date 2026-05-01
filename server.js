//  is how we load modules in Node.js
//  is a built-in module — it comes with Node, no install needed
const http = require('http');
// createServer() creates a web server
// It takes a function that runs EVERY TIME someone visits
// req = the incoming request from the user (what they asked for)
// res = the response we send back to the user
const server = http.createServer(function(req, res) {
// Tell the browser what type of content we are sending
res.writeHead(200, { 'Content-Type': 'text/plain' });
// Send a message back to the browser
res.end('Hello World! My first Node.js server is working!');
});
// Tell the server to listen on port 3000
// Port 3000 is like a door number on your computer
// localhost means &#39;this computer&#39;
server.listen(3000, function() {
console.log('Server is running!');
console.log('Open your browser and go to: http://localhost:3000');
});
