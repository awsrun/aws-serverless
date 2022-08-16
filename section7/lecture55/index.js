exports.handler = async (event, context) => {
    
    console.log("Standart Log")
    console.info("info Log")
    console.warn("Warning Log")

    const body = 
        `Function name: ${context.functionName}
         LogStream name: ${context.logStreamName}
        `
    return body;
}