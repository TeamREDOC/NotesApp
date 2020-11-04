var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

router.get('/update', function(req, res, next) {
  res.render('update', { title: 'Express' });
});

router.get('/delete', function(req, res, next) {
  res.render('delete', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render('list', { title: 'Express' });
});


module.exports = router;
