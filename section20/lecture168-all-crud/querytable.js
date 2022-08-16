import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const params = {
    TableName: "product",
    KeyConditionExpression: "id = :i",
    ExpressionAttributeValues: {
        ":i": { N: "1" } 
    },
    ProjectionExpression: "productName",
};

export const run = async () => {
    try {
        const data = await ddbClient.send(new QueryCommand(params));
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}
run();