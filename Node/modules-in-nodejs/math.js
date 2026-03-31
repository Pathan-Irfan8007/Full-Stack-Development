const write = () => {
    console.log("This is Irfan Pathan");
}

const add = (a, b) => {
    let result = `The sum is ${a+b}.`
    return result;
}

module.exports = {add, write}