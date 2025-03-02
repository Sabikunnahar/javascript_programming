// Code:1
let age= 16;
let userName =age>19 ? 'John' : 'Doe';
console.log(userName); 
console.log('---------------------------------');

//Code 2
const Component =()=>{
    userAge = 10;
    return userAge<19? 'John' : 'Doe'
}
console.log(Component());
console.log('---------------------------------');

//method 3 ()
const address= 'Dhaka';
const country= 'Bangladesh';

const person={
    userName: 'Nahar',
    age: 27, 
    address, //we can directly call the variable in object.
    country,
    isMarried: true,
    fav: ['travel', 'Eat'],
    'person wise': 'good',
}
 console.log(person.userName);
 console.log(person.age);
 console.log(person['person wise']);
 console.log('---------------------------------');

 //method 4*** | Suppose there is an object and we want to change only one value of that object.
    const mobile={
        itemName: 'iPhone',
        price: 1000, 
        color: 'black',
        variant: 'Bangladesh',
        isInsured: true,
        camera: ['100mp', '50mp'],
        'Selfie camera mp': '120mp',
    }

    const mobile2={...mobile, itemName: 'Samsung', price: 2000};
    console.log(mobile);
    console.log(mobile2);
    console.log('---------------------------------');

    // method 5 (filter) ***  
    /*Suppose we have an array fo fruits and we want to filter the banana. 
    we can cannot use foreach because it's complicated to use thats why we use filter. */
    const fruits=['apple', 'banana', 'mango', 'orange'];

    const filterFruits = fruits.filter((fruit)=> fruit === 'banana'); // will print banana
    console.log(filterFruits);

    const startsWithB = fruits.filter((fruit)=> fruit.toLowerCase().includes('o')); // 'o' is included in mango and orange
    console.log(startsWithB);

    const lengthFruits = fruits.filter((fruit)=> fruit.length===5);
    console.log(lengthFruits); // will print mango, orange because the length of these two fruits are 5.
    
    const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumber = numbers.filter((number) => number%2===0);
    console.log(evenNumber); // will print 2, 4, 6, 8, 10
    console.log('---------------------------------');

    // method 6 (map) ***
    /* Suppose we have an array of numbers and 
    we want to multiply each number by 2 with each member. We can use map instead of foreach*/ 
    
    const numbers2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const mapNumber = numbers2.map(number =>number * 2);
    console.log("Map numbers = ",mapNumber); // will print 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    console.log('---------------------------------');

    // method 7 (Reduce) ***
    /* Suppose we have an array of numbers and we want to sum all the numbers.
    We can use reduce instead of foreach. Initially you have assign a value. */

    const numbers3=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const myTotal = numbers3.reduce((total , number)=> total + number, 0);
    console.log("Total = ", myTotal); // The sum of all array is 55