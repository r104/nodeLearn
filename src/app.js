// "use strict";
// const express = require("express");
// const app = express();
// const assert = require('assert');
//
// const {test1, test2} = require("./middle");
//
// const MongoClient = require('mongodb').MongoClient;
//
// const lambdaTest = (event, context) => {
//   console.log("terraform lambda test");
// };
//
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('user');
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     assert.deepStrictEqual(err, null);
//     console.log('Found the following records');
//     console.log(docs);
//     callback(docs);
//   });
// };
//
// MongoClient.connect('mongodb://localhost:27017', function(err, client) {
//   assert.deepStrictEqual(null, err);
//   console.log('Connected successfully to server');
//
//   const db = client.db('user');
//
//   findDocuments(db, function() {
//     client.close();
//   });
// })
//
// app.listen(3000, err => {
//   if(err) {
//     console.log(err);
//     return;
//   }
//   lambdaTest();
//   console.log("listening on port 3000")
// });
//

// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
  try {
    // const ret = await axios(url);
    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'hello world',
        // location: ret.data.trim()
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }

  return response
};
