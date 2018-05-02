

var express = require('express'),
    app = new express(),
    https = require('https'),
    path = require('path'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),//company
    hbs = require('express-handlebars'),
    urlencodedParser = bodyParser.urlencoded({ extended: false }),
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


//post
mongo = require('mongodb');
assert = require('assert');
// var url = 'mongodb://localhost:27017/test';




var promsie = mongoose.connect('mongodb://DuyHo:hothanhphuongduy@ds135179.mlab.com:35179/sep_k21t1_team5')

app.set('view engine', 'ejs');
//set views path
// app.set('views',path.join(  __dirname,'/app/views/backend/view'));
app.set('views', path.join(__dirname, '/app/views'));
app.use(express.static(__dirname + '/app/public/backend'));
app.use(express.static(__dirname + '/app/public/frontend'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.set('public',path.join(__dirname, '/app/public'));

//content
// app.get('/Home',function(req,res){
//     res.render('Home');
// });
// var store = require('store');
app.get('/ListOfPost', function (req, res) {
    res.render('ListOfPost');
});
app.get('/index', function (req, res) {
    res.render('index');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});
app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/viewdetail', function (req, res) {
    res.render('viewdetail');
});
app.get('/viewlistproject', function (req, res) {
    res.render('viewlistproject');
});
app.get('/index', function (req, res) {
    res.render('index');
});
app.get('/mail', function (req, res) {
    res.render('mail');
});
app.get('/post-product', function (req, res) {
    res.render('post-product');
});


// post-product
app.post('/insert', function (req, res, next) {
    var item = {
        ProductName: req.body.title,
        Price: req.body.Price,
        Discription: req.body.decription,
        User_seller: req.body.user_seller,
        Numberphone: req.body.numberphone

    }
    mongo.connect(promsie, function (err, db) {
        assert.equal(null, err);
        db.collection('Post').insertOne(item, function (err, result) {
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        });
    });
    res.redirect('/');
})



// mongoose.connect("mongodb://DuyHo:hothanhphuongduy@ds135179.mlab.com:35179/sep_k21t1_team5",function(err, db){
//     if (err) throw err;
//     var product = db.collection('posts');
//     products.find({}).toArray(function (err,data) {
//         //nếu lỗi
//         if (err) throw err;
//         //nếu thành công
//         console.log(data);
//     });
//     db.close();
// });

//contact company
app.post('/mail', urlencodedParser, function (req, res) {

    var yourname = req.body.yourname;
    var youremail = req.body.youremail;
    var numphone = req.body.numphone;
    var message = req.body.message;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ppcrentalteam04@gmail.com',
            pass: 'K21t1team04'
        }
    });

    var mailOptions = {
        from: '"Hỗ trợ chợ tốt Văn Lang"<ppcrentalteam04@gmail.com>',
        to: 'team05.sep.2018@gmail.com',
        //pass:sep.team05.2018
        subject: 'Hỗ trợ khách hàng',
        text: 'Họ và tên: ' + yourname + ' Địa chỉ email: ' + youremail + ' Số điện thoại: ' + numphone + ' Nội dung:' + message
    };

    transporter.sendMail(mailOptions, function (err, inffo) {
        if (err) {
            console.log(err);
            res.send('Thất bại');
        } else {
            res.send('Bạn đã gửi liên hệ thành công ')
        }
    })
})


var port = process.env.port || 3000;

app.listen(port, function () {
    console.log('Server star in localhost:' + port);
})