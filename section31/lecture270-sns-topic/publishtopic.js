import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

const params = {
    TopicArn: "arn:aws:sns:us-east-2:308360398142:new-topic",
    Message: "Example publish command message"
};

export const run = async () => {
    try {
      const data = await snsClient.send(new PublishCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();