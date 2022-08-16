exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    let payload = JSON.parse(event.body);
    
    let result = 0;
    try {
        if (payload.a === undefined || payload.b === undefined || payload.op === undefined) {
            throw new Error(`event should exist a-b-op: "${event}"`);
        }
        
        switch(payload.op) {
            case "+":
                result = payload.a + payload.b;
                break;
            case "-":
                result = payload.a - payload.b;
                break;
            case "*":
                result = payload.a * payload.b;
                break;
            case "/":
                result = payload.b === 0 ? NaN : payload.a / payload.b;
                break;        
        }        
        console.log('Result is : ', result);
    } catch (error) {
        console.error(error)
        return {
            statusCode: 400,
            body: `Cannot process event: ${error}`,
        }
    }

    return {
        statusCode: 200, // default value
        body: JSON.stringify({
            processed: true,
            result: result
        }),
    };    
}