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
// array[10]='Aish'
console.log('Array->',array)
array.push('sachin')  // add elemen at last

// removeing element
array.pop() // last elemennt
console.log('Array->'+array)

//remove perticular element

array.shift() // remove first element
console.log('Array->'+array)
array.pop() //  rmove last element of array
console.log('Array:'+array)
array.splice(1,2)  // remove elements at 1& 2 location is removed
console.log('Array->'+array)

// array revers
console.log('Array->'+array.reverse())
// finding location of perticular element
console.log('Array is:'+array)
console.log('Index of kale->'+array.indexOf(20))
array.push(20,30,40)
// array with seprator
console.log(array.join('->'))
// gracery ist example

var array=[]
var iteam=document.querySelector('#iteam').value.toString()
function add() {
    array.push(iteam)
    document.querySelector('#display').textContent=array.join(',')
    document.querySelector('#iteam').value=''
}
function remove() {

}





function display() {
    document.querySelector('.display').innerHTML='Array'+'->'+res+' '+':)'
}