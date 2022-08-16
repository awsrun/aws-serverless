import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3client.js";
import {fs} from "file-system";

const file = "./index.html";
const fileStream = fs.createReadStream(file);

const params = {
    Bucket: "new-bucket-from-sdk-45645",
    Key: "index.html",
    Body: fileStream
};

export const run = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();