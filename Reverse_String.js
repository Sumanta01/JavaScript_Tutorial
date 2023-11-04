//Reverse the String

function reverseString(str) {
  return str.split('').reverse().join('');
}

const originalString = "Sumanta Swain";
const reversedString = reverseString(originalString);
console.log(reversedString); 


