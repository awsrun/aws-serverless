import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const params = {
    // TODO : Implement
};

export const run = async () => {
    try {
        // TODO : Implement
        // const data = await ddbClient.send(new PutItemCommand(params));
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}
run();