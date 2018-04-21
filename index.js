var express = require('express'),
    app = new express(),
    https = require('https'),
    path = require('path'),
    bodyParser = require('body-parser'),
    User = require('./models/User'),
    About = require('./models/About'),
    ContactOfCompany = require('./models/ContactOfCompany'),
    ContactOfSeller = require('./models/ContactOfSeller'),
    Image = require('./models/Image'),
    InfoCompany = require('./models/InfoCompany'),
    Post = require('./models/Post'),
    PostStatus = require('./models/PostStatus'),
    ProductType = require('./models/ProductType'),
    UserStatus = require('./models/UserStatus'),
    mongoose = require('mongoose');

var promsie = mongoose.connect('mongodb://DuyHo:hothanhphuongduy@ds135179.mlab.com:35179/sep_k21t1_team5')

app.set('view engine','ejs');
//set views path
app.set('views',path.join(  __dirname,'/app/views/backend/view'));

app.use(express.static(__dirname + '/app/public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// app.set('public',path.join(__dirname, '/app/public'));

//content
// app.get('/Home',function(req,res){
//     res.render('Home');
// });
// var store = require('store');
app.get('/ListOfPost',function(req,res){
    res.render('ListOfPost');
});



var port = process.env.port || 3000;

app.listen(port, function () {
    console.log('Server star in localhost:' + port);
})