// What is loop?
// A loop is a sequence of instructions that is continually repeated until a certain condition is reached.

// For Loop
var array = [10, 20, 30, 40, 50];
for (let a = 0; a < array.length; a++) {
    const element = array[a];
    console.log(element);
}

var name1 = "Kanhaiya";
for (var a = 0; a < name1.length; a++) {
    console.log(name1[a] + " ");
}

// For in loop
// Forof Loop used for interating each elements in Object

let obj = {
    name: "Kanhaiya",
    roll_no: 67,
    branch: "Mechanical",
    city: "Pandharpur"
}
for (let e in obj) {
    console.log(" Marks Of " + e + " are " + obj[e]);
}

// For Of loop
// Forof Loop used for interating each elements in string and array
var car = "Crysta"
for (const m of car) {
    console.log(m);
}


