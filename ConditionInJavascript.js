console.log("This is Conditional Statement");
console.log();

// If-else conditions
const age = 19;
if (age >= 18) {
    console.log("You can go for Vote");
}
else {
    console.log("You cannot go for Vote")
}

// If-elseif conditions
const marks = 98;
if (marks > 90 && marks < 100) {
    console.log("You get A grade");
}

else if (marks > 70 && marks < 89) {
    console.log("You get B grade");
}
else if (marks > 35 && marks < 69) {
    console.log("You get C grade");
}
else {
    console.log("Sorry You are fail");
}

console.log("Switch Cases");

const month = 12;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("Aught");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Octomber");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Wront data")

}

var day = 5;

switch (day)
 {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thusday");
        break;
    case 3:
        console.log("Wensday");
        break;
    case 4:
        console.log("Thirstday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satarday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("No Day Wrong Information");
        break;
}
