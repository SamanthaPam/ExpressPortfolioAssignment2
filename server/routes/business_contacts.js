let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}
//connect to our business_contacts model
let business_contacts = require('../models/business_contacts');
let business_contactsController = require('../controllers/business_contacts');
//GET ROUTE for the business_contacts list page -READ OPERATION
router.get('/', business_contactsController.displaybusiness_contactsList);

/*GET Route for displaying the Add Page- CREATE Operation*/
router.get('/add', requireAuth,business_contactsController.displayAddPage);

/* POST Route for processing the Add Page - CREATE operation*/

router.post('/add',requireAuth,business_contactsController.processAddPage );

/*GET Route for displaying the Edit page - UPDATE operation*/

router.get('/edit/:id', requireAuth,business_contactsController.displayEditPage);

/*POST Route for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', requireAuth,business_contactsController.processEditPage);

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth,business_contactsController.performDelete);

module.exports = router;