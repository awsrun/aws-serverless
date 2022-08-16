exports.handler = async (event) => {
    console.log("event:", JSON.stringify(event, undefined, 2));
        
    event.Records.forEach(function(record) {
        // Kinesis data is base64 encoded so decode here
        var payload = Buffer.from(record.kinesis.data, 'base64').toString('ascii');
        console.log('Decoded payload:', payload);
    });
};