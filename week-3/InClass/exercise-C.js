function abracaFunction(yourFunc) {
    console.log(
        "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
        "James",
        "Elamin",
        "Ismael",
        "Sanyia",
        "Chris",
        "Antigoni",
    ];

    const abracaOutput = yourFunc(abracaArray);

    return abracaOutput;
}

abracaArray2 = abracaFunction(function (array) {
    return array.map(function (string) {
        return string.toUpperCase()
    })
});

abracaArray2 = abracaFunction((array) => array.map( (string) => string.toUpperCase()));

console.log(abracaArray2);

console.log(abracaArray2);