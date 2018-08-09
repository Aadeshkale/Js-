// get the html element
var textAreaElement = document.querySelector('#text-area')
var textAreaBorder = document.querySelector('#text-area')
var originalElement = document.querySelector('.text-section-div p')
var theTimer = document.querySelector('.timer')
var minutesElements = document.querySelector('#minutes')
var secondsElements = document.querySelector('#seconds')
var creatingMessage = document.querySelector('.cong-section')


var resetButton=document.querySelector('#reset')
var timer=0
var minutes=0
var seconds=0
var interal=0
var timeString=''
var timerRunning =false

// add event lestner for html elements

textAreaElement.addEventListener('keypress',startTimer)
textAreaElement.addEventListener('keyup',matchText)
resetButton.addEventListener('click',resetall)


function resetall() {
    clearInterval(interal)
     timer=0
     minutes=0
     seconds=0
     interal=0
     timeString=''
     timerRunning =false
    textAreaBorder.style

}




function matchText() {
    var textEntered = textAreaElement.value
    var originlText = originalElement.textContent.trim()
    var partialText = originlText.substring(0,textEntered.length)
    if(textEntered === originlText){
        textAreaBorder.style.borderColor='seagreen'
        // stop timer
        clearInterval(interal)
        creatingMessage.style.display='block'

    }else {
        if(textEntered===partialText){
            textAreaBorder.style.borderColor='lightblue'
        }else {
            textAreaBorder.style.borderColor='orangered'
        }
    }
}



function startTimer() {
    var textEnteredLength = textAreaElement.value.length
    if(textEnteredLength===0 && !timerRunning){

        interal= setInterval(countTime,10)
    }
}

function countTime() {
    theTimer.textContent=timer.toString()
    minutes = Math.floor((timer/100)/60)
    seconds = Math.floor((timer/100)-( minutes * 60))
    miniseconds=Math.floor(timer-(seconds * 100)-(minutes * 6000 ))
   // timeString=prefixZero(minutes)+" "+'Mins:'+prefixZero(seconds)+" "+'Secs'
    minutesElements.textContent=prefixZero(minutes)
    secondsElements.textContent=prefixZero(seconds)
    theTimer.textContent=timeString
    timer++
}


function prefixZero(time) {
    if (time<=9){
        return "0"+time
    }
    else {
        return time
    }
}