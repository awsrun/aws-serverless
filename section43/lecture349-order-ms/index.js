import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const handler = async function(event) {
  console.log("request:", JSON.stringify(event, undefined, 2));  

  // 1- iterate sqs records
  // 2- get request body payload of eventbridge
  // 3- get actual payload from eventbridge detail object
  // 4- save order item into order dynamodb table with using dnamodb sdk package
  
  try {
    // 1- iterate sqs records
    for(const record of event.Records) {
      console.log('Content: %j', record);

      // 2- get request body payload of eventbridge
      const ebPublishedMessage = JSON.parse(record.body); 

      // 3- get actual payload from eventbridge detail object
      const orderData = JSON.parse(ebPublishedMessage.detail);
      console.log(orderData);
      
      // 4- save order item into order dynamodb table with using dnamodb sdk package      
      orderData.id = '1';
      const params = {
        TableName: 'order',
        Item: marshall(orderData)
      };

      const createResult = await ddbClient.send(new PutItemCommand(params));
      console.log(createResult);
    }    

  } catch (e) {
    console.error(e);    
  }
};