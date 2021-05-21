const express = require('express');
const router = express.Router();

console.log("se conecto el js");


/* GET home page */
router.get('/', (req, res, next) => {
 
    res.render("index");

});
/* router.get((req, res) => {
  res.redirect('/');
}) */
module.exports = router;
