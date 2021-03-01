const test = require('./controllers/testController.js');
const express = require('express')
const app = express()

app.use('/test', test);