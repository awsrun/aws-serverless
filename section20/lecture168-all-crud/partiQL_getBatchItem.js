import { BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const params = {    
    Statements: [
        {
            Statement: "SELECT * FROM product  WHERE id=?",
            Parameters: [{ N: "2" }],
        },
        {
            Statement: "SELECT * FROM product  WHERE id=?",
            Parameters: [{ N: "3" }],
        }
    ]    
};

export const run = async () => {
    try {        
        const data = await ddbClient.send(new BatchExecuteStatementCommand(params));
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }
}
run();