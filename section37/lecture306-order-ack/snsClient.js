import { SNSClient } from "@aws-sdk/client-sns";
const REGION = "us-east-2";
const snsClient = new SNSClient({ region: REGION });
export { snsClient };