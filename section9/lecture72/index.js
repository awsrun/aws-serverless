exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    // fetch method and querystring
    const method = event.requestContext.http.method;
    const queryParam = event.queryStringParameters.message;
    console.log(`Received ${method} request with ${queryParam}`);

    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello from ${queryParam}`),
    };
    return response;
}