var express = require('express');
var router = express.Router();
var authorController = require('../controllers/todoauthor');
var cookieParser = require('cookie-parser');
const author = require('../model/todoauthor');
router.use(cookieParser());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , miniTitle:'miniTitle text hello there'});
});
router.get('/newroute', function(req, res, next) {
  res.send('Hello! I am new router');
});
router.get('/todoauthor',authorController.createAuthor);
module.exports = router;
