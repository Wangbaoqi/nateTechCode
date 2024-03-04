var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', (req, res) => {
  // res.send('req.body');

  console.log(req.cookies);
  res.json(req.body)
})

module.exports = router;
