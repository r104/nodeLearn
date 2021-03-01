const mongoose = require('mongoose');
const TestObject = require('../models/testObject');

const mongoDB = 'mongodb://127.0.0.1/sample';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let sampleObj = new TestObject({name: 'testObject'});

sampleObj.save(function (err) {
    if (err) return (err);
});