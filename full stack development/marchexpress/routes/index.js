var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var authorController = require('../controllers/author');
const Author = require('../model/author');
var productController = require('../controllers/product1')
var userController = require('../controllers/users');
var bookController = require('../controllers/book');
var categoryController =  require('../controllers/category');
var personalinfoController = require('../controllers/personalinfo');

router.use(cookieParser());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , miniTitle:'miniTitle text hello there'});
});
router.get('/newroute', function(req, res, next) {
  res.send('Hello! I am new router');
});
router.post('/author',authorController.createAuthor);
router.get('/author',authorController.getAuthors);
router.get('/author/:id',authorController.getAuthor);
router.delete('/author/:id',authorController.deleteAuthor);
router.put('/author/:id',authorController.updateAuthor);

router.post('/products',productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.delete('/products/:id', productController.deleteProduct);
router.put('/products/:id', productController.updateProduct);
router.get('/productssearch/:name', productController.getProductes);
router.get('/productsavailability/:availability', productController.getAvailability);
router.get('/productsprice/:price', productController.getPrice);


router.post('/user',userController.createUser)
router.get('/user',userController.getUsers)
// router.get('/user/:id',userController.getUser)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)

// router.get('/usersearchusername/:username',userController.getByUsername)
// router.get('/usersearchname/:name',userController.getByName)
// router.get('/usersearchdob/:dob',userController.getByDob)
// router.get('/usersearchpass/:password',userController.getByPassword)

router.post('/book',bookController.createBook);
router.get('/book',bookController.getBooks);
router.post('/category',categoryController.createCategory);
router.get('/category',categoryController.getCategory);

router.post('/personalinfo',personalinfoController.createPersonalinfo);
router.get('/personalinfo',personalinfoController.getPersonalinfo);

router.get('/login', function(req, res, next){
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Login</title>
</head>
<body>
  <form action = "/makelogin" method="get">
    <input type="text" name="username"/>
    <input type="password" name="password" />
    <button> Login </button>
  </form>
</body>
</html>`)
});

router.get('/makelogin', function(req, res, next){
  console.log(req.query);
  if(req.query.username == "ashish"){
    req.session.loggedIn = true;
    req.session.userDetails = {
      username: req.query.username,
      email: "some email"
    };
    res.send(" you are logged in");
  } else {
    res.send("invalid credentials");
  }
});

router.get("/userarea", function(req, res, next){
  if(req.session.loggedIn){
    res.send(`you are logged in and name is ${req.session.userDetails.username}`);
  } else {
    res.send (" not logged in");
  }
})

router.get('/logout', function(req, res, next){
  req.session.destroy(function(err){
    console.log(err);
    res.send("Logged out");
  })
})

module.exports = router;
