let fs=require('fs');

fs.readFile('test.txt','utf-8',function(err,result){
    if(err)
        console.log(err);
    else
        console.log(result);
})


fs.writeFile('mine.txt','Thidar Khaing',function(err){
    if(err)
        console.log(err);
    else
        console.log("File  successfully wriete!");
})

fs.appendFile('mine.txt',' Finally',function(err){
    if(err)
        console.log(err);
    else
        console.log('Success');
})