//BOM Operations

// width of the browser
var width= window.innerWidth
console.log("Width of Brawoser is:"+width+"px")
var height=window.innerHeight
console.log("Height of Brawoser is:"+height+"px")
// Open a new Tab
//  window.open()
//  window.print()


// DOM Properties to get body , title , URL
var body=document.body
console.log(body)
var title=document.title
console.log(title)
var url =document.url
console.log(url)


//DOM Methods
//document.getElementById();
var h1Element=document.querySelector('#display')
h1Element.textContent='Goog morning'
h1Element.style.color='red'
h1Element.style.fontSize='35px'
h1Element.style.border='2px solid green'
h1Element.style.padding='10px'
function rev() {
}
h2=document.querySelector('#main')
h2.style.color='white'
h2.style.boxShadow='0 0 15px black'

var form = document.querySelector('#form')
var input=document.querySelector('#uname')
var btn=document.querySelector('#submit')
btn.style.backgroundColor='green'

function task() {
    input.style.backgroundColor='lightblue'
    input.style.border='2px solid red'

}
// Js event listeners
// get element
// add event listener
// write the logic inside the funtion
var btn=document.querySelector('#submit')
btn.addEventListener('click',task)
// event listner fox text box
input.addEventListener('keyup',validate)
function validate() {
    input.style.border='2px solid blue'
}




//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events