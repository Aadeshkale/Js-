// If Else condition Example
var a=20
if(a%2==0){
    console.log('a is an even no')
}
else {
    console.log(' a is an odd no')
}
console.log('\n')

// For loop Example to display from 1 - 10 values
var output=''
for(var i=10;i>0;i--){
    console.log('->',i,'<-')
    output=output+i+'->'
}
console.log('\n')

// While loop Example to display from 1 - 10 values
i=1
while (i<=10){
    console.log(i)
    i++
}
console.log('\n')

// Do while loop Example to display from 1 - 10 values
do {

    console.log(i)

}while (i<=10){
    console.log(i)
    i++
}

// Switch Statement Example to display full Day
char='s'
switch (char){
    case 'a':
        console.log('This is a')
        break
    case 'b':
        console.log('This is b')
        break
    case 'c':
        console.log('This is c')
        break
    case 'd':
        console.log('This is d')
        break
    default:
        console.log('please enter valid input')
}
function print() {
    document.querySelector('#display').textContent=output
}