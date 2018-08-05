// Math

// pi value
var pi=Math.PI
console.log('Pi='+pi)

// squareroot
var a=Math.sqrt(144)
console.log("squareroot of a is:"+a)
var c= 20
var d= 30
// min-max
console.log("Maximum no is:"+Math.max(c,d,25,36))
console.log("Minimum no is:"+Math.min(c,d,25,36))
// power of
console.log('2 power of 64 is:'+Math.pow(22,64))

// random no between 1 to 100
console.log('Random no is:'+Math.random()*100)

// Stings

var s='Goos morinng'
console.log("Entered string is:"+s)
// upper case- lower case
console.log("Upper Case: " +s.toUpperCase())
console.log('Lower Case: '+s.toLowerCase())
// substring
var sub= s.substr(5)
console.log("Substring is:"+sub)

// length of string
console.log('Length of String is:'+s.length)

// counting perticular charector ex.'o'
var cnt=0
for (i=0;i<=s.length;i++){
    if(s[i]==='o'){
        cnt=cnt+1
    }
}
console.log("Total no of occurance of 'o' is:"+cnt)

//reverse of string
console.log('Exp:'+s[11])
len=s.length-1
rev=''
for (i=len;i>=0;i--){
    rev+=s[i]
}
console.log("Reverse of string is:"+rev)

// number to string function

function convert(num) {
var res=''
    a=['zero','one','two','three','four','five','six','seven','eight','nine']
    num=num.toString()
    len=num.length
    for(i=0;i<len;i++){

        res+=a[num[i]]+"  "

    }
console.log("Conversion result is: "+res)
}
convert(1234)




