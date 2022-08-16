exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    if (event.a === undefined || event.b === undefined || event.op === undefined) {
        throw new Error(`event should exist a-b-op: "${event}"`);
    }

    let result = 0;
    switch (event.op) {
        case "+":
            result = event.a + event.b;
            break;
        case "-":
            result = event.a - event.b;
            break;
        case "*":
            result = event.a * event.b;
            break;
        case "/":
            result = event.a / event.b;
            break;        
    }

    console.log('Result is : ', result);

    return result;
}