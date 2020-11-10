var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Notes' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Notes' });
});

router.get('/update', function(req, res, next) {
  res.render('update', { title: 'Notes' });
});

/*router.get('/delete', function(req, res, next) {
  res.render('delete', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render('list', { title: 'Express' });
});*/


module.exports = router;
