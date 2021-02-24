function secondMatchesAmy(array) {
  if (array[1] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

let array = ["Boby", "Anna"];

console.log('["Boby", "Anna"]', secondMatchesAmy(array));

array[1] = "Amy";

console.log('["Boby", "Amy"]', secondMatchesAmy(array));
