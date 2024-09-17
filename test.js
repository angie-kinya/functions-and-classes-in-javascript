// 1. Create a function that takes two arguments and returns the sum of those arguments.
//declare the function
function sum(p, q) {
    console.log(`The sum of ${p} and ${q} is ${p + q}`);
}
//call the function
sum(25, 13);


// 2. Create a function that takes two arguments and checks if the first argument is greater than the second argument.
function largest(a, b){
    if (a > b){
        console.log(`${a} is greater than ${b}`)
    } else {
        console.log(`Enter a larger number for the first argument`)
    }
}
//call the function
largest(876, 809);


// 3. Create a function that takes a number and returns the square of that number.
function square(number) {
    let result = Math.pow(number, 2);
    console.log(`The square of ${number} is ${result}`);
    return result;
}
//call the function
square(12);


// 4. Create a function that takes a number and returns the cube of that number.
function cubic(number) {
    let result = Math.pow(number, 3);
    console.log(`The cubic of ${number} is ${result}`);
    return result;
}
//call the function
cubic(13);


// 5. Create a function that takes a number and returns the factorial of that number.
function factorial(n) {
    let fact = 1;
    for(i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(`The factorial of ${n} is ${fact}`);
    return fact;
}
//call the function
factorial(7);