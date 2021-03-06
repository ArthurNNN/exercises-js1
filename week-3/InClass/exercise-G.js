

function whoCanDrive(array) {
    return array.filter(year => 2021 - year >= 17);
}

let birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

console.log("These are the birth years of people who can drive:")
console.log(whoCanDrive(birthYears));