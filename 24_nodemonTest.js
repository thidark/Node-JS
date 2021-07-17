let http=require('http');

let server=http.createServer(function(req,res){
    var obj={
        name:"Thidar Khaing",
        age:20,
        family:3
    }
    res.writeHead(200,{'Content-type':'application/json'});
    res.end(JSON.stringify(obj));
});

server.listen(4000,function(){
    console.log("Server is running");
})