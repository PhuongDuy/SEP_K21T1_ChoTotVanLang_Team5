var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    ID: {
        type: String,
        unique: true,
        required: true,

    },
    ProductName: {
        type: String,
    },
    Discription: {
        type: String,

    },
    Price: {
        type: Number,

    },
    User_ID: {
        type: Number,
        unique: true,
        required: true,
    },
    ProductType_ID: {
        type: Number,
        required: true
    },
    Create_at: {
        type: Date,
        default: Date.now

    },
    PostStatus_ID: {
        type: Number,
        required: true
    },
    User_seller:{
        type:String,
        required:true
    },
    Numberphone:{
        type:Number,
        required:true
    }

});
module.exports = mongoose.model('Post', PostSchema); 