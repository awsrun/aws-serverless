console.log('This example from index.js file !');

const logger = () => {
    console.log('test from logger function');
}
logger();

(() => {
    console.log('test from anonymous function');
})();