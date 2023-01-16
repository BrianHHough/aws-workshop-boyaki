

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 exports.handler = event => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    event.Records.forEach(record => {
      console.log(record.eventID); 
      console.log(record.eventName);
      console.log('DynamoDB Record: %j', record.dynamodb);
    });
  
    const AWS = require('aws-sdk');
    const records = event.Records.map(record => ({
      new: AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage),
      old: AWS.DynamoDB.Converter.unmarshall(record.dynamodb.OldImage)
    }));
    return (
      Promise.resolve('Successfully processed DynamoDB record') && 
      console.log(records)
    );
  };
  