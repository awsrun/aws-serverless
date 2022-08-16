exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    let body;
    
    try {
        switch (event.routeKey) {
            case "GET /product":
                body = `Processing Get All Products`; // GET product
                break;
            case "GET /product/{id}":
                if(event.pathParameters != null) {
                    body = `Processing Get Product Id with "${event.pathParameters.id}"`; // GET product/1234
                }
                break;
            case "POST /product":
                let payload = JSON.parse(event.body);
                body = `Processing Post Product Id with "${payload}"`; // POST /product
                break;
            case "DELETE /product/{id}":
                if(event.pathParameters != null) {
                    body = `Processing Delete Product Id with "${event.pathParameters.id}"`; // DELETE product/1234
                }
                break;
            default:
                throw new Error(`Unsupported route: "${event.routeKey}"`);
        }

        console.log(body);
        return {
            statusCode: 200,
            body: JSON.stringify({
            message: `Successfully finished operation: "${event.routeKey}"`,
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