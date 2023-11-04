let user={
    name:'John',
    age:25,
    city:'New York',
    laptop:{
        brand:'Lenovo',
        ram:'16GB',
        processor1:'Ryzen 7'
    }
}
for(let i in user){
    //console.log(i);
    console.log(i,user[i]);

}
for(let j in user.laptop){
    console.log(j,user.laptop[j]);
}