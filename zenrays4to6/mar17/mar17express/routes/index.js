var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zenrays', Location: 'Location', });
  // res.render(`<button> <a href="/submission"> Contact us</a> </button>`)
});

router.get('/contact',function(req, res, next){
	res.send(`<!DOCTYPE html>
<html>
<head>
	<title>Contact us form</title>
</head>
<body>
<input type="text" placeholder="Enter name"><br>
<input type="number" placeholder="Enter age"><br>
<input type="mail" placeholder="Enter email"><br>
<button> <a href="/submission">Submit</a></button>
</body>
</html>`)
})

router.get('/submission', function(req, res, next){
	res.send(`thanks, your request is received`);
})
module.exports = router;
