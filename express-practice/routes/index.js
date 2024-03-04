var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)

  if (!req.cookies.name) {
    res.cookie('name', 'nate', {
      domain: 'localhost',
      maxAge: 1000 * 60 * 60 * 24 * 7, // maxAge priority over expires
      expires: new Date('2025-01-01'),
      signed: false,
      httpOnly: true,      // can't be accessed by browser
      path: '/',           // can only be accessed in this path
    })
  }

  res.render('index', { title: 'Express' });
});



module.exports = router;
