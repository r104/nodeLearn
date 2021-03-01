"use strict";
const express = require("express");
const app = express();
const assert = require('assert');

const {test1, test2} = require("./middle");

const MongoClient = require('mongodb').MongoClient;

const lambdaTest = (event, context) => {
  console.log("terraform lambda test");
};

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('user');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.deepStrictEqual(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  assert.deepStrictEqual(null, err);
  console.log('Connected successfully to server');

  const db = client.db('user');

  findDocuments(db, function() {
    client.close();
  });
})

app.listen(3000, err => {
  if(err) {
    console.log(err);
    return;
  }
  lambdaTest();
  console.log("listening on port 3000")
});

