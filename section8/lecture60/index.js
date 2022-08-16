exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    console.log('value1 =', event.key1);
    console.log('value2 =', event.key2);
    console.log('value3 =', event.key3);
    
    return event.key1;
}