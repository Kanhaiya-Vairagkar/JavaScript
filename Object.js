
var personal = {
    name: 'Kanhaiya',
    mobile_No: '8830067005',
    Address: 'Pandharpur'
};
console.log("Type is : " + (typeof personal));

// Dot Notation
personal.mobile_No = 9977277727;
console.log(personal.Roll_no);

// Bracket Notation
personal['Address'] = 'Pune';  //We can change Address by Bracket Notation
console.log(personal.Address);
let selection='name';
personal[selection]='Ranjeet';
console.log(personal.selection);



let personal1 = {
    name: 'Kanhaiya',
    mobile_No: '8830067005',
    Address: 'Pandharpur'
};

console.log(personal.mobile_No);
personal.age = 23;
console.log(personal.age);
console.log(personal.name);
console.log("Type is : " + (typeof personal));


const personal2 = {
    name: 'Kanhaiya',
    mobile_No: '8830067005',
    Address: 'Pandharpur'
};
console.log("Type is : " + (typeof personal));