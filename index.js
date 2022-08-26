/* 
const http = require('http');
const data = require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200, {'content-Type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000)

 */
const fs = require('fs');

const path = require('path');
const dirPath = path.join(__dirname,'files');
console.log(dirPath);

/* for(i=0;i<5;i++){
    fs.writeFileSync(`${dirPath}/Test${i}.txt`,`This is just a  test file`)
} */

fs.readdir(dirPath,(err,files)=>{
    files.map(item=>{
        console.log(`This file is ${item}`);
    });
    files.forEach(item=>{
        console.log(`file name is ${item}`);
    })
})

