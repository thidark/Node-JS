let http=require('http');
let port=4000;

let server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end("Hello Thidar");
});

server.listen(port,function(){
    console.log("Server is running at Post "+port);
});