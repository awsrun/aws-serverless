import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const handler = async function(event) {
  console.log("request:", JSON.stringify(event, undefined, 2));

  // 1- iterate sqs records
  // 2- get request body payload of sns
  // 3- get request body payload of order data	
  // 4- save order item into inventory dynamodb table with using dnamodb sdk package

  try {
    // 1- iterate sqs records
    for(const record of event.Records) {
        console.log('Record: %j', record);

        // 2- get request body payload of sns
        const snsPublishedMessage = JSON.parse(record.body); 
        console.log('SNS Message: %j', snsPublishedMessage);

        // 3- get request body payload of order data
        const orderRequest = JSON.parse(snsPublishedMessage.Message);
        console.log('Order Request: %j', orderRequest);

        // business logic and prepared inventoryItem
        if (orderRequest == null || orderRequest.type == null || orderRequest.type != 'SHIP_REQUIRED') {
            throw new Error(`order type should exist and should be SHIP_REQUIRED in orderRequest: "${orderRequest}"`);
        }

        // set PK of invetory table
        orderRequest.code = orderRequest.item;

        // 4- save order item into inventory dynamodb table with using dnamodb sdk package
        const dynamodbParams = {
            TableName: 'inventory',
            Item: marshall(orderRequest || {})
        };
        const createResult = await ddbClient.send(new PutItemCommand(dynamodbParams));
        console.log("Successfully create item into inventory table.",  createResult); 
    }
    
  } catch (e) {
    console.error(e);
  }
};