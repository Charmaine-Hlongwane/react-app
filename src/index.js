// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                   in to separate elements
//                                  (unpacks the elements)



let numbers = [1,2,3,4,5];

let max = Math.max(...numbers);
console.log(max);

let min = Math.min(...numbers);
console.log(min);


let username = "Charmaine Hlongwane";
let letters = [...username].join("-"); // you can use a string into an array of char using the spread operator
console.log(letters);


let fruits = ["apple", "orange", "banana"];
console.log(fruits);
//you can clone using the spread operator
let newCopy = [...fruits];
console.log(newCopy);

//you can also merge using the spread operator and even add other things in between them.
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);

let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 2;  // Increment each number by 2
    console.log(numbers[i]);
    newNumbers.push(numbers[i]);  // Print the updated value
}
console.log(`Your updated numbers are: ${newNumbers}`); // Print `newNumbers`);