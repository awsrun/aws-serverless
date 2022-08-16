import { PutTargetsCommand } from "@aws-sdk/client-eventbridge";
import { ebClient } from "./eventBridgeClient.js";

const params = {
    Rule: "test_event",
    Targets: [
        {
          Arn: "arn:aws:lambda:us-east-2:308360398142:function:target-function", //LAMBDA_FUNCTION_ARN
          Id: "test-event-target",
        },
    ]    
};

export const run = async () => {
    try {
      const data = await ebClient.send(new PutTargetsCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();