//creation of objects , adding properties ,  retrieval

var emp={
    name:'Sachin',
    age:'24',
    sub:'comp',
    address:{
        city:'aurangabad',
        state:'maharastra'
    }
}
// Accessing
console.log(emp)
console.log(emp.address)
console.log(emp.address.state)
emp.salary=50000
// adding values
console.log(emp)

// brackets notation for dyamic value
var prop='name'
console.log(emp.prop)  // undefined
console.log(emp[prop]) // Sachin
prop='age'
console.log(emp[prop]) // 24

