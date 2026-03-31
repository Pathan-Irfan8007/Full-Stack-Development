const greet = () => {
    console.log("Hey, What's Up !");
};
greet();
console.log("-----------------\n");

const func_1 = (sample_func) => {
    sample_func();
    console.log("This is Functon 1");
};

func_1(greet);