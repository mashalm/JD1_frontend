var
  Aws = require('aws-sdk'),
  Promise = require('bluebird');

Promise.longStackTraces();
Aws.config.setPromisesDependency(Promise);
Aws.config.update({region:'us-east-1'});

var dynamo = new Aws.DynamoDB();

module.exports = dynamo;
