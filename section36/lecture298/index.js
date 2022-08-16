exports.handler = async (event) => {
    console.log("event:", JSON.stringify(event, undefined, 2));
    
    event.Records.forEach(record => {
        const { body } = record;
        console.log(body);
    });
    return {};
};