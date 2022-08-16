import { PutEventsCommand } from "@aws-sdk/client-eventbridge";
import { ebClient } from "./eventBridgeClient.js";

const params = {
    Entries: [
      {
        Detail: '{ "key1": "value1", "key2": "value2" }',
        DetailType: "orderSubmitted",        
        Source: "com.ecommerce.app",
      },
    ],
};

export const run = async () => {
    try {
      const data = await ebClient.send(new PutEventsCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();