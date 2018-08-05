// Simple function
function hello() {
    console.log("Welcome to js function programming ")
}
hello() // function calling

// function with args
function add(x,y) {
    var z = x+y
    console.log('Addition is:'+z)
}
add(10,20)

// function returning values

function square(n) {

    return n*n
}
console.log('Squrare is:'+square(10))

// funtional with additional parameters

function info(name,age) {
    console.log('name: '+name+'->'+'age: '+age)
}
info('sachin',25,'aurangabad')  // here additional parameter simply ignored

// funtion return nothing
function ok() {
    return
}
console.log(ok())
//

function msg() {
    document.querySelector('#display').textContent='Please use console to view js ->'

}