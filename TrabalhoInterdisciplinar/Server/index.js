const express = require("express");
const mongoose = require("mongoose");
const app = express();
const local = 3000;

app.get('/', function (req, res) {
    res.send('Hello World');
  })
  
app.listen(3000);