var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', stateofmind: 'Confused, worried, sad'});
});
router.get('/timepass', function(req, res, next) {
  res.render('index', { title: 'Lets do timepass on sunday and relax' });
});


module.exports = router;
