setTimeout(function(){
    console.log("thidar Khaing")
},3000)
i=0;
var myinter=setInterval(function(){
    i++;
    if(i==5)
        clearInterval(myinter);
    else
        console.log(`Interval ${i}`)
},1000);