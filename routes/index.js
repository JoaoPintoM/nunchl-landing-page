var mongoose = require('mongoose');
var express  = require('express');
var router   = express.Router();

// mongoose configuration
mongoose.connect('mongodb://localhost/nunchl-landing-page');

var User = mongoose.model('User', {
  email: { type: String, lowercase: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var user = new User({ email: req.body.email });
  user.save(function (err) {
    if (err) console.error(err);
  });
  res.redirect('/');
});

router.get('/api/users', function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) console.error(err);
    res.jsonp(users);
  })
})

module.exports = router;
