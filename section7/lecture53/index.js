exports.handler = async (event) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    const total = event.num1 * event.num2;
    const response = {
        statusCode: 200,
        body: "The total of " + event.num1 + " and " + event.num2 + " is " + total
    };
    return response;
};