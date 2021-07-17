var event=require('events')

var myEmitter=new event.EventEmitter();

myEmitter.on("startW",function(){
    console.log("I am start working");
})

myEmitter.emit('startW')