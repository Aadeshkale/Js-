// Assignment
var a=30
var b=20
var c=20
var s='Aadesh'

// reletional oprators -> < , > ,<=, >= ,!=

if(a>b){
    console.log('a is greather than b')
}
else {
    console.log('b is greather than a')
}

// Arthametic ooprators -> + , - , * , / , %

var sum = a+b
console.log('Adition is '+sum)


// logical oprators -> && , || , !

if (a>b && a>c ){
    console.log('A is greather than both')
}
else {
    console.log('A is less than both')
}
// comprision oprators -> == ,===
s='10'
if(a==s){
    console.log('A is same as S')
}
else {
    console.log('both are diffrent')
}
if(a===s){
    console.log('A is same as S')
}
else {
    console.log('both are diffrent')
}
// short hand oprators -> +=, -= , *= , /=
a+=20
console.log('The value of becomes:'+a)

// unery oprator ++,-- ( post,pre-fix)
a++
console.log('the value of a becomes:'+a)

// ternary oprator

a>b?console.log('a is greather than b') : console.log('b is greather than a')

