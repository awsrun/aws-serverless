import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
const REGION = "us-east-2";
const ebClient = new EventBridgeClient({ region: REGION });
export { ebClient };