// const:- The const keyword has all the properties as let keyword but there is a one condition in const keyword is user can't update it if it is declared with const keyword.

const a=8
function seen(){
    a=9
    console.log(a)
}
seen()

