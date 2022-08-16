import { ListTopicsCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

export const run = async () => {
    try {
      const data = await snsClient.send(new ListTopicsCommand({}));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();