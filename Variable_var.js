// var :- The scope of a var keyword is globally or function scope. It means if you declare a variable outside the function it will be access globally

var a=10;
var b=20;
function show(){
    console.log(a+b); // 30

}
show()
console.log(a);//10
console.log(b);//20

console.log("-------------------------------------");
var c=11
 function see(){
        var c=12;
        console.log(c);//12
 }
    see()
    console.log(c);//11
    
var ok=9999
var ok=7777
ok=6666
console.log(ok);//6666