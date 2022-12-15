// You can create an object in three different ways:

// Using object literal
// By creating instance of Object directly
// By using constructor function

// 1) program to create JavaScript object using object literal
const person = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'], //Array
    greet: function () {                       //Function
        console.log('Hello everyone.');
    },
    score: {                                  //Object
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

// 2)program to create JavaScript object using instance of an object

const persont = new Object({
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function () {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(typeof persont); // object

// accessing the object value
console.log(persont.name);
console.log(persont.hobbies[0]);
persont.greet();
console.log(persont.score.maths);


// 3)program to create JavaScript object using instance of an object

function Personq() {
    this.name = 'John',
        this.age = 20,
        this.hobbies = ['reading', 'games', 'coding'],
        this.greet = function () {
            console.log('Hello everyone.');
        },
        this.score = {
            maths: 90,
            science: 80
        }

}

const persons = new Personq();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);