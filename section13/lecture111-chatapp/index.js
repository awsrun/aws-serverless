const AWS = require('aws-sdk');

exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    let body;
    
    const route = event.requestContext.routeKey;
    const connectionId = event.requestContext.connectionId;
    console.log(`ConnectionId = "${connectionId}" - Route = "${route}"`);

    try {
        switch (route) {
            case "$connect":
                body = `Serverless Chat App Connected - ConnectionId "${connectionId}"`; // $connect
                break;
            case "$disconnect":
                body = `Serverless Chat App Disconnected - ConnectionId "${connectionId}"`; // $disconnect
                break;
            case '$default':
                body = `Serverless Chat App Default Route`; // $default
                break;
            case "sendMessage":
                const message = JSON.parse(event.body).message;
                body = `Responding sendMessage with "${message}"`; // sendMessage
      
                const callbackAPI = new AWS.ApiGatewayManagementApi({
                  apiVersion: '2018-11-29',
                  endpoint:
                    event.requestContext.domainName + '/' + event.requestContext.stage,
                });
      
                await callbackAPI
                    .postToConnection({ ConnectionId: connectionId, Data: body })
                    .promise();
                break;
            default:
                throw new Error(`Unsupported route: "${connectionId}"`);
        }

        console.log(body);
        return {
            statusCode: 200,
            body: JSON.stringify({
            message: `Successfully finished operation: "${route}"`,
            body: body
            })
        };

    } catch (e) {
        console.error(e);
        return {
          statusCode: 400,
          body: JSON.stringify({
            message: "Failed to perform operation.",
            errorMsg: e.message
          })
        };
    }
}