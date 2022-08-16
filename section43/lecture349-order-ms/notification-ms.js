exports.handler = async (event) => {
    console.log("event:", JSON.stringify(event, undefined, 2));
    
    if (event['detail-type'] !== undefined) {
    	// get request body payload of order data
    	const orderData = JSON.parse(event.detail);
    	console.log(orderData);
    }
};