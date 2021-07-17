let express=require('express')
let app=express();

app.get('/',function(req,res){
    res.send('Home Page');
});

app.listen(4000);

