// let: The scope of a let keyword is only a block of scope .It means we declare variable using let keyword inside the function you did not accept outside the function. It is the improved version of var key word.Let keyword can not be re declared.
let b=87
function seen(){
    let a=98
    console.log(a)
    console.log(b)
}
seen()
//console.log(a)
console.log(b)

//Redeclare
// let gf=47 
// let gf=11
// gf=12


// console.log(gf)

console.log("------------------------");
let ok=21
function show(){
    if (true){
        let oh=22
        console.log(oh)
    }
    console.log(oh)
    console.log(ok);
}
show()