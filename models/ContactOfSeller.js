var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactOfSellerSchema = new mongoose.Schema({
    ID: {
        type: String,
        unique: true,
        required: true
    },
    FullName: {
        type: String,
    },
    Email: {
        type: String,
    },
    Address: {
        type: String
    },
    Phone: {
        type: String,
    },
    Content: {
        type: String,
    },
    User_ID: {
        type: Number
    }

});
module.exports = mongoose.model('ContactOfSeller', ContactOfSellerSchema); 