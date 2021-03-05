const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];


function isNameinArray(name, names) {
    if (names.includes(name)) {
        console.log("Found me!");
        return true;
    } else {
        console.log("Haven't found me :(");
        return false;
    }
}

isNameinArray("Artur", names);

// names.find(isNameInArray("Artur", names));