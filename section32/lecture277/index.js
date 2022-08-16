exports.handler = async (event) => {
    console.log("event:", JSON.stringify(event, undefined, 2));
    
    var message = event.Records[0].Sns.Message;
    console.log('Message received from SNS:', message);
};