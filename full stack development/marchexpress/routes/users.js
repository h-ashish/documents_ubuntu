var express = require('express');
var router = express.Router();
var useController = require('../controllers/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/donttalk', function(req, res, next){
	res.send('speech is silver, silence is gold')
})
router.post('/register', useController.addUser);
module.exports = router;
