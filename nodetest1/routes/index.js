var express = require('express');
var router = express.Router();
var util = require('util');


/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});
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
    var collection = db.get('postcollection');
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

router.get('/UpperBack', function(req, res) {
    res.render('UpperBack', {title: 'Login'});
});

router.get('/Biceps', function(req, res) {
    res.render('Biceps', {title: 'Login'});
})
router.get('/Lats', function(req, res) {
    res.render('Lats', {title: 'Login'});
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

router.get('/Post', function(req, res) {
    res.render('Post', {title: 'Login'});
});

router.get('/Login', function(req, res) {
    res.render('Login', {title: 'Login'});
});
router.get('/Register', function(req, res) {
    res.render('Register', {title: 'Login'});
});
/* POST to Add User Service */
router.post('/postContent', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var title = req.body.titlePost;
    var text = req.body.textPost;
    var body = req.body.bodyPart;
    
    var collection = db.get('postcollection');
    // Submit to the DB
    collection.insert({
        "title" : title,
        "text" : text,
        "body" : body

        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header so the address bar doesn't still say /adduser
                res.location("Home");
                // And forward to success page
                res.redirect("Home");
            }
        });
});

/* POST to Add User Service */
router.post('/addUser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userFirst = req.body.firstName;
    var userLast = req.body.lastName;
    var userEmail = req.body.email;
    var confEmail = req.body.confEmail;
    var userPassword = req.body.password;
    var confPassword = req.body.confPass;
    var collection = db.get('usercollection');
    if(confEmail === userEmail && userPassword === confPassword) {
       
       // Submit to the DB
        collection.insert({
            "firstName" : userFirst,
            "lastName" : userLast,
            "email" : userEmail,
            "password" : userPassword

        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header so the address bar doesn't still say /adduser
                res.location("Home");
                // And forward to success page
                res.redirect("Home");
            }
        });
    }
    else {
        res.location("Register");
                // And forward to success page
        res.redirect("Register");
    }
});




 
 

module.exports = router;