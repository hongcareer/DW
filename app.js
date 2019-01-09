const express = require('express');
const app = express();
const route = require('./routes/index');
app.use(express.static('dist'));
app.use(route);
app.listen(3000,() =>{
  console.log('服务器开启成功')
})
