var express = require('express'),
    app = new express(),
    https = require('https'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var promsie = mongoose.connect('mongodb://DuyHo:hothanhphuongduy@ds135179.mlab.com:35179/sep_k21t1_team5')

app.set('view engine','ejs');
//set views path
app.set('views',path.join(__dirname,'app/views'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


//content


var port = process.env.port || 3001;

app.listen(port, function () {
    console.log('Server star in localhost:' + port);
})