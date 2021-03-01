const test = require('./controllers/testController.js');
const app = require("express/lib/router");

app.use('/test', test);