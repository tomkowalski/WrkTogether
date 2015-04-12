var express = require('express');
var router = express.Router();
var util = require('util');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

router.get('/Deltoids', function(req, res) {
    res.render('Deltoids', {title: 'Login'});
});

router.get('/Traps', function(req, res) {
    res.render('Traps', {title: 'Login'});
});

router.get('/LowerChest', function(req, res) {
    res.render('LowerChest', {title: 'Login'});
});

router.get('/UpperChest', function(req, res) {
    res.render('UpperChest', {title: 'Login'});
});

router.get('/LowerBack', function(req, res) {
    res.render('LowerBack', {title: 'Login'});
});

router.get('/UperBack', function(req, res) {
    res.render('UpperBack', {title: 'Login'});
});

router.get('/Biceps', function(req, res) {
    res.render('Biceps', {title: 'Login'});
});

router.get('/Triceps', function(req, res) {
    res.render('Triceps', {title: 'Login'});
});

router.get('/LowerAbs', function(req, res) {
    res.render('LowerAbs', {title: 'Login'});
});
router.get('/UpperAbs', function(req, res) {
    res.render('UpperAbs', {title: 'Login'});
});

router.get('/Quads', function(req, res) {
    res.render('Quads', {title: 'Login'});
});

router.get('/Hamstrings', function(req, res) {
    res.render('Hamstrings', {title: 'Login'});
});

router.get('/Calves', function(req, res) {
    res.render('Calves', {title: 'Login'});
});

router.get('/Login', function(req, res) {
    res.render('Login', {title: 'Login'});
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/Login', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var userPassword = req.body.password;


    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail,
        "password" : userPassword,
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});




 
 

module.exports = router;