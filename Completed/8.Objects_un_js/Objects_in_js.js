emp={
    name:'Sachin',
    id:12,
    age:24,
    ocupatiion:'mpsc-student',
    address:{
        city:'aurangabad',
        state:'maharastra'
    }

}
console.log(emp)
// accessing information
console.log(emp.age)
console.log(emp.address)
// acessing dyanamic values
console.log(emp['name'])
// adding values
emp.address.country=' India'
console.log(emp.address)
// modifying values
emp.name='Shivam'
console.log(emp.name)

function display() {
    document.querySelector('#display').style.color='red'
    document.querySelector('#display').innerHTML='working fine'
}