import { SQSClient } from "@aws-sdk/client-sqs";
const REGION = "us-east-2";
const sqsClient = new SQSClient({ region: REGION });
export { sqsClient };