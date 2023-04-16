function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
convertCtoF(30);

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

function factorialize(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
factorialize(5);

function findLongestWordLength(str) {
  let longestLength = 0;
  let currentLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      currentLength = 0;
    } else {
      currentLength++;
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }
  return longestLength;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
