/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiGraphqlapiGraphQLAPIIdOutput = process.env.API_BOYAKIGQL_GRAPHQLAPIIDOUTPUT
var apiGraphqlapiGraphQLAPIEndpointOutput = process.env.API_BOYAKIGQL_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 const AWSAppSyncClient = require('aws-appsync').default;
 const gql = require('graphql-tag');
 const AWS = require('@aws-sdk')
//  global.fetch = require('node-fetch');
 
exports.handler = event => {

  console.log(`EVENT: ${JSON.stringify(event)}`);

  event.Records.forEach((record) => {
    if(record.eventName === "INSERT") {
      const unmarshall = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
    }
    
    // old: AWS.DynamoDB.Converter.unmarshall(record.dynamodb.OldImage)
  });

  

  // console.log(`_EVENT: ${JSON.stringify(event)}`);

  // event.Records.forEach(record => {
  //   console.log('======== record.eventID ========')
  //   console.log(record.eventID); 

  //   console.log('======== record.eventName ========')
  //   console.log(record.eventName);

  //   console.log('======== record.dynamodb ========')
  //   console.log('DynamoDB Record: %j', record.dynamodb);
  // });

  
  return (
    Promise.resolve('Successfully processed DynamoDB record') 
    // && console.log(records)
  );
};
