let mongoose = require('mongoose');
let business_contactsModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
    {
        collection: "business_contacts"
    });

module.exports = mongoose.model('business_contacts', business_contactsModel);