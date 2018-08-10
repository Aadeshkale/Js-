// functions recap

// Scopes introduction

// Block scoping for FOR loop
for (i=0;i<=10;i++){

}
console.log(i)
//Block scoping for if Block
var course='english'
if( course==='english'){

}
console.log(course)

// Function Scoping
function allocDepartment() {
    if(course==='english'){
        var dept='medical'
    }
}
// course.log(dept)





// coding exercises

// 1) output ?

var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}

// 2) output ?
var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 3) output ?
var top = 20;
var inner = 50;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 4) output ?

var top = 20;
var inner = 50;
function something() {
    var inner = 30;
}
something();
console.log(inner);

// 6) output ?
var name = "Naveen";
function greet(name) {
    console.log("Hello " + name);
}

greet("John");

//  IIFE example
(function () {
   var greeting = 'welcome'
   console.log(greeting)
})
();




// Read and Write Operations for variables


// Read and Write Operations for Functions


// Implications of Read and Write Operations

