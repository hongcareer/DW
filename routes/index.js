const express = require('express')
const homeData = require('../data/index')

const router = express.Router();

//home页

router.get('/home',(req,res) => {
  res.send(homeData)
});
module.exports = router;

