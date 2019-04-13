require('dotenv').config()

const path = require('path');
const express = require('express');
const routes = require('./route');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/file', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(routes);

app.listen(process.env.PORT);