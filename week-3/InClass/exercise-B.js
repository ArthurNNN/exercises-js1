function isNameInArray(name, array) {
    if (array.includes(name)) {
        return `${name} is at the class with ${array}`;
    } 
    return `${name} is not at the class with ${array}`
}

let class1 = [
    'Artur', 'Giorgio', 'Henriette', 'Yogi', 'Ali', 'Kimberly',
    'Adrian', 'Enia', 'Guido', 'Keti', 'Kiki', 'Kris', 'Manpreet', 'Manuel'
]

let class2 = [
    'Alexandra', 'Angelo', 'Antonio', 'Diana', 'Diego', 'Emilio',
    'Fode', 'Giomar', 'Jaime', 'Juan', 'Mateo', 'Ronar']

let mixClass = class1.concat(class2);
mixClass.sort();
// console.log(mixClass);
console.log(isNameInArray("Artur", class1));
console.log(isNameInArray("Artur", class2));
