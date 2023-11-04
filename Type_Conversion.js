let num=56
console.log(num ,typeof num);
let num2="123"
Number(num2) // Type Conversion number to string
console.log(num2,typeof num2);
let num4=Boolean('ss') //Type conversion from string to boolean
console.log(num4, typeof num4);
console.log("---------------");
let num3=Symbol('SS')
console.log(num3 , typeof num3);
let num6=Symbol.toString(num3)
console.log(num6,typeof num6);
let num7=Boolean(num3)
console.log(num7,typeof num7); //Type conversion from Symbol to boolean
console.log("---------------");
let num8="8787"
console.log(parseInt(num8 ,10));
let num9="75.665"
console.log(parseFloat(num9 ,10));
console.log("-----------------");
let num10="767"
console.log(num10.toString()); // Type Conversion by using toStringmethod

console.log(+num10);// Type  Conversion by using Unary Operator
console.log(Math.floor(num10)); // Conversion By Using Math.Floor or Math.round 



