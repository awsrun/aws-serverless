import { CreateTopicCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

const params = {
    Name: "new-topic"
};

export const run = async () => {
    try {
      const data = await snsClient.send(new CreateTopicCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();