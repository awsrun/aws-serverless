import { ExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const params = {
    Statement: "INSERT INTO product  value  {'id':?, 'productName':?}",
    Parameters: [{ N: "3" }, { S: "new phone" }],
};

export const run = async () => {
    try {        
        const data = await ddbClient.send(new ExecuteStatementCommand(params));
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}
run();