var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.send('Home page for auth')
})

router.post('/signup', function (req, res, next) {
  res.send('I am in POST signup');
});

router.post('/signin', function (req, res, next) {
  res.send('I am in POST signin');
});

module.exports = router