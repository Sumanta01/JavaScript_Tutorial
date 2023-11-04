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
console.log(user);
//console.log(user.laptop.processor); // Undefined
console.log(user.laptop.processor?.length);
delete user.age// Delete the property of object
console.log(user);
user.age=25 // update the age 
console.log(user);


