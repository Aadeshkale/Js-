// Assignment operator =
var a = 10
b=a
s='Sachin'
console.log('The value of a is:'+a)
console.log('The value of b is:'+b)
console.log('The value of s is:'+s)
console.log('\n')
// Arithmetic operators + - * /
var x=4
var r= x/2
console.log('The value of x is:'+x)
console.log('The value of r is:'+r)
console.log('\n')

// Short hand math += , -= , *= , /=
var n=10
console.log('n is:'+n)
n+=1
console.log('n is:'+n)
console.log('\n')
// Conditional operators < , > , <= , >= , !=
var  a=10
var b= 20
if(a>b){
    console.log('a is greather')
}
else {
    console.log('b is greather')
}
if(a!=b){
    console.log('both has diffrent values')
}
console.log('\n')
// Unary Operator ++ , -- (pre , post)
a=30
b=++a
console.log('The value of b is:'+a)
console.log('The incremented value of b is:'+b)
b--
console.log('The decremented value of b is:'+b)
console.log('\n')
// Logical operators AND , OR
var grade = 50
if(grade>40 & grade < 60){
    console.log(' you are pass')
}
else if(grade>60 & grade<70 ){
    console.log('you got distintion')
}
else if(grade>70 & grade<100){
    console.log('yoy got highest marks')
}

console.log('\n')
// String Concatenation Operator
var test=12+24+'26'+12+26
console.log(test)
console.log('\n')
// Ternary operator (? :)
a=10,b=20
a>b?console.log('a is greather'):console.log('b is greather')

// Type of operator
s='shush'
n=null
console.log("type of s is:"+typeof s)
console.log("type of n is:"+typeof n)
console.log('\n')
// == operator
s='10'
t=10
if(s==t){                                       // does implicite type casting
    console.log('both are same')
}
else {
    console.log('both are diffrent')
}
console.log('\n')
// === operator
s='10'
t=10
if(s===t){
    console.log('both are same')             // does not do implicite type casting
}
else {
    console.log('both are diffrent')
}




