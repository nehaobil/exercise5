const express = require('express');
const app = express();
const port =  4000;

const indexRoute = require('./routes/index.js');

app.listen(port, () => {
    console.log(`Working on port: ${port}`)
  })  