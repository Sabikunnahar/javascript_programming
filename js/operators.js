/*
* Arithmetic operators (+, -, *, /, %, **)
*/

let a = 10;
let b = 5;

console.log('Operators:', a + b, a - b, a * b, a / b, a % b, a ** b);

/*
* Comparison operators (==, ===, !=, !==, >, <, >=, <=)
*/
let p= 8;
let q=5;
console.log('Operators:', p == q, p === q, p != q, p !== q, p > q, p < q, p >= q, p <= q);

/*
* Logical operators (&&, ||, !)
*/

if (p!=q && p%2==0) {
    console.log('They are not equal and p is even');
    
} else {
    console.log('They are equal and p is odd');
}

/*
* Assignment operators (+=,  -=,  *=,  /=, **=)
*/
let x=10;
x+=5;   
console.log('Assignment:', x);

/*
* Conditional operators (true ? 'yes' : 'no')
*/
let age = 20;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message); // "Adult"
