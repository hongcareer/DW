const express = require('express')
const homeData = require('../data/index')
const cityData = require('../data/city')
const router = express.Router();

//home页

router.get('/home',(req,res) => {
  res.send(homeData)
});
router.get('/city',(req,res) => {
  res.send(cityData)
})
module.exports = router;

