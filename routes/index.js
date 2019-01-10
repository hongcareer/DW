const express = require('express')
const homeData = require('../data/index')
const cityData = require('../data/city')
const serveData = require('../data/service');
const commentsData = require('../data/comments')
const router = express.Router();

//home页

router.get('/home',(req,res) => {
  res.send(homeData)
});
router.get('/city',(req,res) => {
  res.send(cityData)
});
router.get('/server',(req,res) => {
  res.send(serveData)
});
router.get('/comments',(req,res) => {
  res.send(commentsData)
});
module.exports = router;

