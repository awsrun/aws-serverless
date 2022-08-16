import { DeleteTopicCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

const params = {
    TopicArn: "arn:aws:sns:us-east-2:308360398142:new-topic"
};

export const run = async () => {
    try {
      const data = await snsClient.send(new DeleteTopicCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();