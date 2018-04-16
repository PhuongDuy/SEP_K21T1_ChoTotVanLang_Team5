var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactOfCompanySchema = new mongoose.Schema({
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
module.exports = mongoose.model('ContactOfCompany', ContactOfCompanySchema); 