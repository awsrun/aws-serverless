import { DeleteTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const params = { TableName: "order" };

export const run = async () => {
    try {        
        const data = await ddbClient.send(new DeleteTableCommand(params));
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}
run();