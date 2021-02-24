function checkUserName(userName, userType) {
    if (userType === "admin" || userType === "manager") {
        return "Username valid" 
    } 
    
    if (userName.charAt(0) === userName.charAt(0).toUpperCase()
        && userName.length > 5 && userName.length < 10) {
        return "Username valid"
    } else {
        return "Username invalid"
    }
}

console.log("Milk, user: ", checkUserName("Milk", "user"));
console.log("Milk, admin: ", checkUserName("Milk", "admin"));
console.log("happyKiwi, user: ", checkUserName("happyKiwi", "user"));
console.log("happyKiwi, manager: ", checkUserName("happyKiwi", "manager"));
console.log("SadApple, user: ", checkUserName("SadApple", "user"));
console.log("SadApple, manager: ", checkUserName("SadApple", "manager"));
console.log("coolOrange, user: ", checkUserName("coolOrange", "user"));
console.log("coolOrange, admin: ", checkUserName("coolOrange", "admin"));
console.log("SadDoubleApple, user: ", checkUserName("SadDoubleApple", "user"));
console.log("SadDoubleApple, manager: ", checkUserName("SadDoubleApple", "manager"));
