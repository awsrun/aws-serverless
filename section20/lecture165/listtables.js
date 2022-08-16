import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const run = async () => {
    try {
        const data = await ddbClient.send(new ListTablesCommand({}));
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}
run();