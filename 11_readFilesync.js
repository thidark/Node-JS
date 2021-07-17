let fs=require('fs');

let data=fs.readFileSync('test.txt','utf-8');
console.log(data)

fs.writeFileSync('mine.txt',data)