const express = require('express');
const router = express.Router();

console.log("se conecto el js");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
