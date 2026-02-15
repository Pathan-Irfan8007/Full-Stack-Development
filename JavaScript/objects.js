let obj = {
    name : "Irfan",
    age : 20,
    course : "Under Graduate",
    year : "SE"
};

// console.log(obj);
// console.log(obj["name"]);
// console.log(obj["age"]);
// console.log();

let info = {
    fName : "Irfan",
    lName : "Pathan",
    age : (2026 - 2006),
    study : {
        stream : "BE",
        department : "CS",
        year : "SE", 
    },
    college : "RMDSSOE",
};

console.log(info);
// console.log(info.study);

info.age = 19;
info.mood = "Happy";
info.a = "A";
console.log(info);

delete info.a;
delete info.study;
console.log(info);