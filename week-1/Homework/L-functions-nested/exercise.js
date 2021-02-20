function percentageRounded(num, divider) {
    return Math.round(100 * num / divider);
}

function makeMessage(percentageStudents, percentageMentors) {
    console.log("Percentage students: " + percentageStudents + "%");
    console.log("Percentage mentors: " + percentageMentors + "%");
}

var students = 20;
var mentors = 10;
var sum = students + mentors;
makeMessage(percentageRounded(students, sum), percentageRounded(mentors, sum));
