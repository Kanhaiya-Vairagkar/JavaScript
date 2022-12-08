//Non-parameteriszed function
// function demo1() {
//     var a = 90;
//     var b = 90;
//     console.log(a + b);
// }
//  demo1();

//Parameteriszed function
//     function demo(a, b)
//    {
//     console.log(a+b);
//    }
//    demo(10,10);

// Expression Function
// var fun = function demo() {
//     var a = 90;
//     var b = 90;
//     console.log(a + b);
// }
// var k = fun();
//Here take variable and this variable convert variable into function by giving paraenthesis

//Anonymous function
var anony = function (e, f) {
    console.log("this is anonymous function");
    console.log(e - f);
}
// anony(50, 40);
    (50, 40);

//arrow function
// var arrow = (g, h) => {
//     console.log("This is arrow function");
//     console.log(g / h);
// }
// arrow(20,10);

//Debuging
// console.log("Start");
// function demo(a,b)
// {

//     console.log(a+b);
// }
// demo(90,90);

//IIFE --->Immediate Invoke afunction Expression  -->Use and  destroy function.This function use only once.

//   (function demo(a,b)
//   {
//     console.log("this is life");
//     console.log(a+b);
//   }(10,10));


// const fizzBuzz = num => {

//     for (let i = 1; i <= num; i++) {

//         // check if the number is a multiple of 3 and 5

//         if (i % 3 === 0 && i % 5 === 0) {

//             console.log('fizzbuzz')

//         } // check if the number is a multiple of 3

//         else if (i % 3 === 0) {

//             console.log('fizz')

//         } // check if the number is a multiple of 5

//         else if (i % 5 === 0) {

//             console.log('buzz')

//         } else {

//             console.log(i)

//         }

//     }

// }