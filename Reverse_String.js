function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  
  const originalString = "Hello, World!";
  const reversed = reverseString(originalString);
  console.log(reversed);
  