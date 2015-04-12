var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});

module.exports = router;

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});
