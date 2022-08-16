import { ListQueuesCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "./sqsClient.js";

export const run = async () => {
    try {
      const data = await sqsClient.send(new ListQueuesCommand({}));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();