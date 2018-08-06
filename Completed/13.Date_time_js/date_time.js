
// hole date format
var today=new Date()
console.log("todays date is:"+today)

// date in cusom format
var day=today.getDate()
var month=today.getMonth()+1
var year=today.getFullYear()
console.log("Today's date is:"+day+'/'+month+'/'+year)

// Digital clock
function digi() {
    var today = new Date()
    var optionns = {timeZone:'Asia/Kolkata'}
    time=today.toTimeString('en-us',optionns)
    document.querySelector('#clk').textContent=time
}
setInterval(digi,1000)