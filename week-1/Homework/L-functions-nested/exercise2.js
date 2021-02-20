function spellInUppercase(name) {
    return name.toUpperCase();
}

function makeGreating(nameInUppercase) {
    return "HELLO " + nameInUppercase;
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(makeGreating(spellInUppercase(mentor1)));
console.log(makeGreating(spellInUppercase(mentor2)));
console.log(makeGreating(spellInUppercase(mentor3)));
console.log(makeGreating(spellInUppercase(mentor4)));
console.log(makeGreating(spellInUppercase(mentor5)));


