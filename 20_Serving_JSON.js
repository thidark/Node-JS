let http=require('http');

let server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    let Obj={
        name:"Mg Mg",
        age:20,
        family:{
            father:"U Myat",
            mother:"Daw Nu"
        }
    };
    res.end(JSON.stringify(Obj));

});

server.listen(4000,function(){
    console.log('Server is running');
});