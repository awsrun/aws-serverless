import { PutEventsCommand } from "@aws-sdk/client-eventbridge";
import { ebClient } from "./eventBridgeClient.js";

export const handler = async function(event) {
  console.log("request:", JSON.stringify(event, undefined, 2));

  // 1- accommodate incoming http request to correct path
  // 2- get request body payload which includes event data
  // 3- publish message to Amazon EventBridge Custom Eventbus with using eventbridge sdk package
  // 4- return back snyc basket payload to the api gateway

  try {
    
    // 1- accommodate incoming http request to correct path        
    if (event.httpMethod != 'POST') {
        throw new Error(`Http Method should be POST. You are requesting : "${event.httpMethod}"`);
    }

    // 2- get request body payload which includes event data
    // expected request payload : { "item":"iphone", "price":150, "detailtype":"CheckoutBasket", "source": "com.swn.basket.checkoutbasket"
    const basketRequest = JSON.parse(event.body);
    if (basketRequest == null || basketRequest.detailtype == null) {
        throw new Error(`basket detail-type should exist in basketRequest: "${basketRequest}"`);
    }

    // 3- publish message to Amazon EventBridge Custom Eventbus with using eventbridge sdk package
    const params = {
      Entries: [
          {
              Source: basketRequest.source,
              Detail: JSON.stringify(basketRequest),
              DetailType: basketRequest.detailtype,
              Resources: [ ],
              EventBusName: 'CheckoutBasketEventBus'
          },
      ],
  };

  const data = await ebClient.send(new PutEventsCommand(params));
  console.log("Success, event sent; requestID:", data);

    // 4- return back snyc basket payload to the api gateway
    return {
        statusCode: 200,
        body: JSON.stringify({
        message: `Successfully finished basket operation: "${basketRequest}"`,
        body: data
        })
    };    

  } catch (e) {
    console.error(e);
    return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Failed to perform operation.",
          errorMsg: e.message,
          errorStack: e.stack,
        })
    };
  }
};