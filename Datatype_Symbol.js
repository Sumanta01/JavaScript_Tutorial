//Symbol
//In JavaScript, Symbols are unique and immutable values that are often used as object property keys. 
const val=Symbol('js')
console.log(val)
console.log(typeof val)
console.log(val.toString())
console.log(val.description)
//Symbol is a unique identifier
const val1=Symbol('js')
const val2=Symbol('js') //hence  you create a Symbol using Symbol('js'), you're creating a new unique Symbol each time.
console.log(val1===val2)//false unique Symbol each time
const val3=Symbol.for('js')
const val4=Symbol.for('js')//Symbol.for('js'), it checks if a Symbol with the given key ('js' in this case) already exists in the global Symbol registry.
console.log(val3===val4)// true
