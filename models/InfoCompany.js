var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InfoCompanySchema = new mongoose.Schema({
    ID: {
        type: String,
        unique: true,
        required: true
    },
    Adress: {
        type: String
    },
    Phone: {
        type: String
    },
    Fax: {
        type: String
    }
});
module.exports = mongoose.model('InfoCompany', InfoCompanySchema); 