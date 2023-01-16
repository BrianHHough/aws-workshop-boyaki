
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 const AWS = require('aws-sdk');
 const docClient = new AWS.DynamoDB.DocumentClient();

  // var params = {
  //   TableName: 'UserDataTable',
  //   Key: {
  //     HashKey: 'hashkey',
  //   }
  // }

// docClient.get(params, function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });





exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  event.Records.forEach(record => {
    // console.log("record.eventID");
    // console.log(record.eventID);
    // console.log("record.eventName");
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);
    // console.log("........");

    // console.log("followeeId", record.dynamodb.keys["followerId"]);
    // console.log("followerId", record.dynamodb.keys.followerId);
    // console.log("NewImage", record.dynamodb.NewImage);
    // console.log("OldImage", record.dynamodb.OldImage);

    // New Follow Created
    if (record.eventName === "INSERT") {
      const followeeId = record.dynamodb.NewImage.followeeId.S;
      const followerId = record.dynamodb.NewImage.followerId.S;
      
      async function updateUserDataInDB(){
        try {
          var params = {
              TableName: 'UserInfo-kqkftcxppvcelfxytz4wa4rxqe-dev',
              // KeyConditionExpression: 'username = :username',
              // ExpressionAttributeValues: {
              //     ':username': followerId
              // }
          };
          var result = await docClient.scan(params).promise();
          return console.log(JSON.stringify(result));
        } catch (error) {
          console.log(error);
        }
      }
      // function updateUserDataInDB() {
      //   var params = {
      //     TableName: 'UserDataTable',
      //     Key: { followerId },
      //   }
        try {
          // const data = await docClient.get(params).promise();
          console.log("........");
          console.log("followeeId", followeeId);
          console.log("followerId", followerId);
          console.log("........");
          console.log("get user data");
          console.log(updateUserDataInDB());;
          console.log("^ user data above?");
          return ;
        } catch (error) {
          console.log(error);
        }
      // }
      


    }

    // FollowRelationship Modified
    if (record.eventName === "MODIFY") {
      console.log('modified')
    }

    // Follow Relationship Deleted
    if (record.eventName === "REMOVE") {
      const followeeId = record.dynamodb.OldImage.followeeId.S;
      const followerId = record.dynamodb.OldImage.followerId.S;

      console.log("followeeId", followeeId);
      console.log("followerId", followerId);

    }

  });
  return Promise.resolve('Successfully processed DynamoDB record');
};

// exports.handler = async (event, context, callback) => {
//   // Log out information from stream
//   console.log(`EVENT: ${JSON.stringify(event)}`);

//   let userDataFromDatabase = await docClient
//   .query({
//     TableName: 'UserDataTable'
//   })
//   .promise();
  
//   // Process Timeline Modification
//   event.Records.forEach(record => {
    
//     if(record.eventName === "INSERT"){
//       try {
//         return console.log('FOLLOW ADDED', record.dynamodb.NewImage);
//       } catch (error) {
//         return ('error:', error);
//       }
//     } else if (record.eventName === "REMOVE"){
//       try {
//         return console.log('FOLLOW REMOVED', record.dynamodb.NewImage);
//       } catch (error) {
//         return ("error:", error);
//       }
//     }
//      else console.log("eventName not INSERT or DELETE", userDataFromDatabase);
// })
// callback(null, `Successfully processed ${event.Records.length} records.`);
// }
