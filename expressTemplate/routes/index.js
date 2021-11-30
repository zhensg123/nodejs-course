const { json } = require('express');
var express = require('express');
var router = express.Router();
const {querySql} = require('../db')
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.NODE_ENV)
  querySql(`select * from db`).then((result)=>{
    res.render('index', {
      title: JSON.stringify(result)
    });
  }).catch((err)=>{
    res.render('index', {
      title: err
    });
  })
 
});

module.exports = router;
