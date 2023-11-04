let x=22
let y=44
console.log(x>y);//false 
console.log(x<y);//true
console.log(x>=y);//false
console.log(7<=7);//true
console.log(x==y);//false
console.log("----------------");
let ok="pen"
let ok1="book"
console.log(ok==ok1);//false
console.log(ok>=ok1)// Comparision in between by their by ascii value of each character
let ok3="pencil"
console.log(ok>=ok3);//false 
console.log("-----------------------");
let val="7"
let val2=4
console.log(val>=val2);//true It implicity convert the string into number
console.log(val<val2);//false 

console.log("-----------------------------");
let val3="4"
let val4=4
console.log(val3==val4);// gives true because it converts as string use ===
console.log(val3===val4);//false
console.log(val3!==val4);//true
console.log(val3!=val4);//false
