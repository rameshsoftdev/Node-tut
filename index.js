const express = require('express');
const EventEmitter = require('events');
const event = new EventEmitter();
const app = express();
/* 
const os = require('os');
console.log(os.arch());
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());
*/
let count = 0;
event.on('eventAPI',()=>{
    count++;
    console.log('count',count);
})

app.get('/',(req,resp)=>{
   resp.send('root');
   event.emit('eventAPI');
});

app.get('/test',(req,resp)=>{
    resp.send('test');
    event.emit('eventAPI');
 });

app.listen(5000);