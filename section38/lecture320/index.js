exports.handler = async (event) => {
    console.log("event:", JSON.stringify(event, undefined, 2));

    event.Records.forEach(async (record) => {
        console.log('Record: %j', record);

        console.log('Table Event : %j', record.eventName);
        console.log('Order Status : %j', record.dynamodb.NewImage.status.S);

        // TODO : business logics; send email to customer, send sns notifications
    });
};