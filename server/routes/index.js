let  express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProjectsPage);

router.get('/contact', indexController.displayContactPage);

router.get('/services', indexController.displayServicesPage);

router.post('/contact', function (req, res, next) {
    const { first, last, number, email, message } = req.body;
    console.log('First Name user: ', first);
    console.log('Last Name user: ', last);
    console.log('Number user: ', number);
    console.log('Email user: ', email);
    console.log('Message user: ', message);
    res.render('home', { title: 'Home' });
  });
  

/*GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login Page*/

router.post('/login', indexController.processLoginPage);

/*GET Route for register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
