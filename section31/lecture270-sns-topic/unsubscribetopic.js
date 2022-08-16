import { UnsubscribeCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

const params = {    
    SubscriptionArn: "arn:aws:sns:us-east-2:308360398142:new-topic:4e21dfde-305e-426d-9c4b-aa040d7f89a8"    
};

export const run = async () => {
    try {
      const data = await snsClient.send(new UnsubscribeCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();