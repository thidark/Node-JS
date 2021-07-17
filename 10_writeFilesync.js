let fs=require('fs');

let data="StreamAllSearch offers a convenient web search. With it, you can easily search for your favorite topics, images, videos, and news directly from your browser’s search bar. This extension is free to download from the Chrome Web store.";

fs.writeFileSync("test.txt",data)