

/*
    Date Object Examples

 */

// get today's date
var today= new Date()
console.log("Todays Date:"+today)

//get date of the month 0 - 31 getDate()
var date =today.getDate()+"/"+(today.getMonth()+1)+'/'+today.getFullYear()
console.log("Date:"+date)


// Display a Digital Clock on the web page
function digitalClock() {
    var today = new Date()
    // var optinons ={timeZone:'Asia/Kolkata'}
    var time=today.toLocaleTimeString('en-US')
    document.querySelector('#clock').textContent=time
}
setInterval(digitalClock,1000)






/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/