let yourArray = [7, 831, "John", "Maria", true]; // Change this line

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = 7;
// Only change code above this line
console.log(myArray);

function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // Only change code above this line
  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));
