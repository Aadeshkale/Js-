// brawoser inner height and width
console.log("Width:"+window.innerHeight+'px')
console.log("Height:"+window.innerWidth+'px')

// window - attributes
function doit() {
    window.print()  // for printing
}

var btn= document.querySelector('#btn')
btn.addEventListener('click',window.doit)

function new_tab() {
    window.open()   // for oopennig new tab
}
var new_t=document.querySelector('#new_tab')
new_t.addEventListener('click',new_tab)

// DOM properties for body,title,url

console.log(document.body)
console.log(document.title)
console.log(document.url)


// dom methods
var input=document.querySelector('#uname')
var submit=document.querySelector('#submit')
input.addEventListener('keyup',process)
submit.addEventListener('click',dot)
function dot() {
    submit.style.backgroundColor='green'
    submit.style.color='white'
}
function process() {
    input.style.border='2px solid red'

}







