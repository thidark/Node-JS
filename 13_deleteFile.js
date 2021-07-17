/*
let fs=require("fs");

fs.mkdir("Best");*/
let fs=require('fs');
//fs.unlink('test.txt');
fs.mkdir('my/new/folder/create', { recursive: true }, (err) => { if (err) throw err; });

