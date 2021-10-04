var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hobbies',function(req, res, next){
	res.send(`<!DOCTYPE html>
<html>
<head>
	<title>Contact us form</title>
</head>
<body>
	<li>Hobby of Ashish is swimming, hiking</li>
	<li>Hobby of prajwal is cricket</li>
	<li>Hobby of munna is watching news</li>
</body>
</html>`)
})
module.exports = router;
