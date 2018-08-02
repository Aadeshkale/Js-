//creation of a simple function with no args and execute a function


//creation of a simple function with args
    function greet() {
        console.log('good mmorning :)')
    }
    greet()         // functipn calling
// executing a function with less number of params

        function greetargs(name) {
            console.log('hello '+name+' good morning')
        }
        greetargs('sachin')

//executing a function with more number of params
        function greetless(name,age) {
            console.log('Name: '+name+' Age:'+age)
        }
        greetless('sachin',25,'Aurangabad')

//function overloading is not possible here


// functions with return values
        function add(x,y) {
            return x+y
        }
        console.log(add(10,20))
//function with empty return /no return
        function greetok(name) {
            name+='hi'
            return                   // does not anything it gives undefined
        }
        console.log(greetok())


// function Expressions with name and execution


// Anonymous Function Expression and execution


// Functions as arguments without args



// Functions as arguments with args args


// Functions in Objects and Execution


// this keyword for accessing objects props in function


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */


// Default Function Arguments (arguments)

function display() {
    s='welcome'
    document.querySelector('#display').textContent=s
}