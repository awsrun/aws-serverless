import { CreateQueueCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "./sqsClient.js";

const params = {
    QueueName: "new-queue",
    Attributes: {
        DelaySeconds: "60",
        MessageRetentionPeriod: "86400"
    }
};

export const run = async () => {
    try {
      const data = await sqsClient.send(new CreateQueueCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();