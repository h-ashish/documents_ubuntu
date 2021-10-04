var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var authorController = require('../controllers/author');
const Author = require('../model/author');
var productController = require('../controllers/product1')
var userController = require('../controllers/users');

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
router.get('/user/:id',userController.getUser)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)

router.get('/usersearchusername/:username',userController.getByUsername)
router.get('/usersearchname/:name',userController.getByName)
router.get('/usersearchdob/:dob',userController.getByDob)
router.get('/usersearchpass/:password',userController.getByPassword)
module.exports = router;
