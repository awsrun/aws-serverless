import { ExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const params = {
    Statement: "UPDATE product SET productName=? WHERE id=?",
    Parameters: [{ S: "updated phone" }, { N: "3" }],
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