import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const params = {
    TableName: "product",
    Key: {
        id: { N: "1" }
    },
    ProjectionExpression: "productName",
};

export const run = async () => {
    try {        
        const data = await ddbClient.send(new GetItemCommand(params));
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}
run();