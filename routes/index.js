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

const express = require('express');
const { get } = require('mongoose');

const router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.text,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
