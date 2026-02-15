function first() {
    return "First Function Type";
};

const second = function() {
    return "Second Function Type";
};

const third = () => {
    return "Third Function Type - *Preffered";
};

// console.log(first());
// console.log(second());
// console.log(third());


const table = (num) => {
    for(let i=1; i<=10; i++) {
        console.log(`${num} * ${i} = ${num*i}`);
    };
    console.log();
};

table(5);
table(6);
table("7");