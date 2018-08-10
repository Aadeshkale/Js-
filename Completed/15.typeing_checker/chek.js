

var testingText =document.querySelector('#text').value
var textArea = document.querySelector('#text-area')
var resetBtn = document.querySelector('#btn')
var msg = document.querySelector('#diaplaymsg')
var timer = document.querySelector('#time')

var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
textArea.addEventListener('keyup',startTimer)
function startTimer() {
    var enteredTextlength = textArea.value.length
    if(enteredTextlength==0){
        interval=
    }
    timer.textContent='00'
}
