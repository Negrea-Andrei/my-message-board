// routes/index.js

const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

// Add a route for the new message form
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message Form' });
});

// Add a route for handling form submissions
router.post('/new', function (req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  // Validation logic can be added here

  // Push the new message to the messages array
  messages.push({ text: messageText, user: messageUser, added: new Date() });

  // Redirect back to the index page after submitting a new message
  res.redirect('/');
});

module.exports = router;
