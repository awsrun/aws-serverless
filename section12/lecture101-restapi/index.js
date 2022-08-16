exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    let body;
    
    try {
        switch (event.httpMethod) {
            case "GET":
                if(event.queryStringParameters != null) {
                    body = `Processing Get Product Id with "${event.pathParameters.id}" and Category with "${event.queryStringParameters.category}" `; // GET product/1234?category=Phone
                }
                else if (event.pathParameters != null) {
                    body = `Processing Get Product Id with "${event.pathParameters.id}"`; // GET product/1234
                } else {
                    body = `Processing Get All Products`; // GET product
                }
            break;
            case "POST":
                let payload = JSON.parse(event.body);
                body = `Processing Post Product with "${payload}"`; // POST /product
                break;
            case "DELETE":
                if(event.pathParameters != null) {
                    body = `Processing Delete Product Id with "${event.pathParameters.id}"`; // DELETE product/1234
                }
                break;
            default:
            throw new Error(`Unsupported route: "${event.httpMethod}"`);
        }

        console.log(body);
        return {
            statusCode: 200,
            body: JSON.stringify({
            message: `Successfully finished operation: "${event.httpMethod}"`,
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