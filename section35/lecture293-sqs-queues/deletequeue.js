import { DeleteQueueCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "./sqsClient.js";

const params = {
    QueueUrl: "https://sqs.us-east-2.amazonaws.com/308360398142/new-queue"   
};

export const run = async () => {
    try {
      const data = await sqsClient.send(new DeleteQueueCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();