import { PutRuleCommand } from "@aws-sdk/client-eventbridge";
import { ebClient } from "./eventBridgeClient.js";

const params = {  
    Name: "test_event",
    RoleArn: "arn:aws:iam::308360398142:role/service-role/func2-role-9fj16zeb", //IAM_ROLE_ARN
    ScheduleExpression: "rate(5 minutes)",
    State: "ENABLED",
};

export const run = async () => {
    try {
      const data = await ebClient.send(new PutRuleCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();