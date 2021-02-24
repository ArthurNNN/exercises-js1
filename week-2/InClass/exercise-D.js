function moodChecker(mood) {

    if (mood === "happy") {
        return "Good job, you're doing great!";
    } else if (mood === "sad") {
        return "Every cloud has a silver lining";
    } else if (typeof mood === 'number') {
        return "Beep beep boop";
    } else {
        return "I'm sorry, I'm still learnnig about feelings";
    }

}


console.log("happy: ", moodChecker("happy"));
console.log("sad: ", moodChecker("sad"));
console.log("15: ", moodChecker(15));
console.log("wow: ", moodChecker("wow"));