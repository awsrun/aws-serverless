import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const params = {
    TableName: "product",
    ProjectionExpression: "productName",
};

export const run = async () => {
    try {
        const data = await ddbClient.send(new ScanCommand(params));
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}
run();