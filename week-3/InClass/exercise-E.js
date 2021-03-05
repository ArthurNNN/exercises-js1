function getAge(birthYear) {
    return 2021 - birthYear
}

let birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

let ages = birthYears.map(getAge);

// ages = birthYear.forEach(f (year, index) {
//     year = 2021 - year;
// });

console.log(ages);

