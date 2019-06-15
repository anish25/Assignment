var express = require('express');
var router = express.Router();
 
var app = express();

app.use(express.static('public'))
app.use(express.static('views'))
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page:'Home', menuId:'home' });
});

router.get('/Services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/Projects', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

router.get('/About', function(req, res, next) {
  res.render('about', { title: 'about' });
});


router.get('/Contact_Us', function(req, res, next) {
  res.render('contact_us', { title: 'Contact_Us' });
});

module.exports = router;
