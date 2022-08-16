// console.log(process.argv[2] + ' ' + process.argv[3]);

const logger = () => {
    const name = process.argv[2];
    const surname = process.argv[3];
    console.log(`Your Name and Surname : ${name} ${surname}`);
}
logger();