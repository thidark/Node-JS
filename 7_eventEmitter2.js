// Event Emitter => events
//Event Listen, emit

var event =require('events')

var myEmiter=new event.EventEmitter();



myEmiter.on('donow',function(val){
    console.log("I am start working.. " +val);
})

myEmiter.emit('donow',"Thidar Khaing")