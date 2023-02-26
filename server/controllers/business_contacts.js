let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let business_contacts = require('../models/business_contacts');

//we want to display the business_contactsList
module.exports.displaybusiness_contactsList = (req, res, next) => {
    business_contacts.find((err, business_contactsList) => {
        if (err) {
            return console.error(err);
        }
        else {
           //console.log(business_contactsList);
            res.render('business_contacts/list', { title: 'Business Contacts', business_contactsList: business_contactsList,displayName:req.user?req.user.displayName:'' });
        }
    });
}
module.exports.displayAddPage = (req, res, next) => {
    res.render('business_contacts/add',{title:'Add Busines Contact',displayName:req.user?req.user.displayName:''})
}

module.exports.processAddPage = (req, res, next) => {
    let newbusiness_contacts = business_contacts({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
    business_contacts.create(newbusiness_contacts, (err, business_contacts) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/business_contactsList');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    business_contacts.findById(id, (err, business_contactsToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('business_contacts/edit', { title: 'Edit Business Contact', business_contacts: business_contactsToEdit,displayName:req.user?req.user.displayName:'' });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    let updatedbusiness_contacts = business_contacts({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
    console.log('req.body.price' , req.body)
    business_contacts.updateOne({ _id: id }, updatedbusiness_contacts, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //console.log(business_contactsList);
            res.redirect('/business_contactsList');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    business_contacts.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/business_contactsList');
        }
    });
}