array=[10,20,30,40,'kalpana']
console.log(array)
var res=array.toString()

//acessing elements
console.log('Array->'+array)
console.log('array [2] is:'+array[2])
console.log('Array->'+array)

// accessing out of range
console.log('Acessing out of range element->'+array[11])

// length
console.log('Array length->'+array.length)

// adding elements
array[5]='kale'
console.log('Array->'+array)
array[10]='Aish'
console.log('Array->',array)

// removeing element
array.pop() // last name
console.log('Array->'+array)

//remove perticular element

array.shift() // remove last element
console.log('Array->'+array)
// array revers
console.log('Array->'+array.reverse())

function display() {
    document.querySelector('.display').innerHTML='Array'+'->'+res+' '+':)'
}