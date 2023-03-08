
// GIVEN
// console.log(example);
// var example = "I'm the example!";
// //AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//1)


let hello = 'world';
console.log(hello);

//)2

let needle = 'haystack';

const x =function test(){
    needle = 'magnet';
    
}
x();
console.log(needle);


//3)
let brendan = 'super cool';
const p =function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


//4)

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// 5
let food = "chicken";
const mean = function () {
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();
// 6

let genre = "disco";
console.log(genre);
function rewind() {
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

// 7
let dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);
// 8 bonus
function makeDojo(name, students) {
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));







