// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbers100 = numbers.map(function miltiply(element) {
    return element * 100;
})

console.log(numbers100);

numbers100 = numbers.map(function (element) {
    return element * 100;
})

console.log(numbers100);

numbers100 = numbers.map(element => {
    return element * 100;
})

console.log(numbers100);

numbers100 = numbers.map(element => element * 100);

console.log(numbers100);