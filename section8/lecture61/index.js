exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    console.log('name =', event.name);
    console.log('surname =', event.surname);
    
    return event.name + ' ' + event.surname;
}