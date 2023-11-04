let x=5,y=6,z=2
let res=x>y && y<z
console.log(res); //false
let res1=x>y || y<z
console.log(res1); //false
let res2=x>y || y>z
console.log(res2); //true
let res4=!res2
console.log(res4); //false
let res5=!res4
console.log(res5); //true
