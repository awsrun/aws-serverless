import { BatchWriteItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const params = {
    RequestItems: {
        product: [
            {
                PutRequest: {
                  Item: {
                    id: { N: "1" },
                    productName: { S: "iphoneX" },
                  },
                },
            },
            {
                PutRequest: {
                  Item: {
                    id: { N: "2" },
                    productName: { S: "samsung5" },
                  },
                },
            }
        ]
    }
};

export const run = async () => {
    try {        
        const data = await ddbClient.send(new BatchWriteItemCommand(params));
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}
run();