const express = require('express');
const app = express();

// Home route
app.get('/', function(req, res) {
  res.send('Welcome to my Express website!');
});

// About route
app.get('/about', function(req, res) {
  res.send('This is the About page.');
});

// HTML response
app.get('/welcome', function(req, res) {
  res.send('<h1>Welcome!</h1><p>This is <b>HTML</b> from Node.js!</p>');
});

// JSON response
app.get('/info', function(req, res) {
  res.json({
    name: 'My App',
    language: 'JavaScript',
    framework: 'Express'
  });
});

// Route parameter (single)
app.get('/user/:name', function(req, res) {
  const name = req.params.name;
  res.send('Hello, ' + name + '! Welcome to our site!');
});

// Route parameters (multiple)
app.get('/product/:category/:id', function(req, res) {
  const category = req.params.category;
  const id = req.params.id;

  res.json({
    category: category,
    productId: id
  });
});

// 404 handler (MUST be last)
app.use(function(req, res) {
  res.status(404).send('Oops! Page not found. Go back to / (home)');
});

// Start server
app.listen(3000, function() {
  console.log('Server running at http://localhost:3000');
});
