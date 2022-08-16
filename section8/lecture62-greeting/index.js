var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var times = ['morning', 'afternoon', 'evening', 'night', 'day'];

exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    // parse the input values
    let name = event.name === undefined ? 'you' : event.name;
    let city = event.city === undefined ? 'World' : event.city;
    let time = times.indexOf(event.time)<0 ? 'day' : event.time;
    let day = days.indexOf(event.day)<0 ? null : event.day;

    // generate greeting message
    let greeting = 'Good ' + time + ', ' + name + ' of ' + city + '. ' + 'Happy ' + day + ' !';

    // log and return back message
    console.log('Message: ' + greeting);

    return greeting;
}