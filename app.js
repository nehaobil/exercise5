const express = require('express');
const app = express();
const port =  process.env.PORT || 4000;

const indexRoute = require('./routes/index.js');

app.listen(port, () => {
    console.log(`Working on port: ${port}`)
  })  