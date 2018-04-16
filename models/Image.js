var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new mongoose.Schema({
    ID: {
        type: String,
        unique: true,
        required: true
    },
    Name: {
        type: String
    },
    Filepath: {
        type: String
    },
    Post_ID: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Image', ImageSchema); 