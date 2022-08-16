import { ReceiveMessageCommand, DeleteMessageCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "./sqsClient.js";

const queueURL = "https://sqs.us-east-2.amazonaws.com/308360398142/new-queue";

const params = {
    QueueUrl: queueURL,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0,
    MaxNumberOfMessages: 10,
    MessageAttributeNames: ["All"]
};

export const run = async () => {
    try {
      const data = await sqsClient.send(new ReceiveMessageCommand(params));
      // put your business logic

      if (data.Messages) {
        var deleteParams = {
          QueueUrl: queueURL,
          ReceiptHandle: data.Messages[0].ReceiptHandle,
        };
        try {
          const data = await sqsClient.send(new DeleteMessageCommand(deleteParams));
          console.log("Message deleted", data);
        } catch (err) {
          console.log("Error", err);
        }
      } else {
        console.log("No messages to delete");
      }

      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();