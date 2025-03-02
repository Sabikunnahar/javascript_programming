// alert('This is External Js');

// console 1
document.getElementById('title').innerHTML = 'This is a sum';

// console 2
let sum = 40 + 50;
if (sum<100) {
    console.log('The sum is below 100:', sum);
}
else{
    console.log('The sum is above 100:', sum);
}

// console 3
function sayName(fullName, age) {
    console.log(`Hello I'm` + fullName +` and my age is ` + age);
}
sayName('John', 27);

// console 4
let var1 = 10;
let var3 = "Nahar";

console.log(var1 + var3); // 10Nahar
console.log(typeof var3); // string

// console 5
let userName = 'Bristy';

console.log(`My name is ${userName}`); // Correct
console.log(`My name is "Bristy"`); // Correct
console.log(`My name is \`Bristy\``); // Correct
// console.log(`My name is `Bristy``); // Error


// console 6 ( Objects) 

const mobile={
    brand: 'iphone',
    color: 'black', 
    price: 1000,
    isInsured: true,
    camera: ['100mp', '50mp'],
    'Selfie camera mp': '120mp',
}
 console.log(mobile);
 console.log(mobile.brand);
 console.log(mobile['Selfie camera mp']);