const express = require('express');
const reqFilter = require('./MiddlewareLogic');
const app = express();
const route = express.Router();

// Application level middleware
/* 
app.use(reqFilter);
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Home page</h1>');
})
app.get('/about',(req,res)=>{
    res.send('<h1>Welcome to About page</h1>');
})
*/

// Route Level Middleware
/* 
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Home page</h1>');
})
app.get('/about',(req,res)=>{
    res.send('<h1>Welcome to About page</h1>');
})

app.get('/contact',reqFilter,(req,res)=>{
    res.send('<h1>Welcome to contact page</h1>');
})

app.get('/profile',reqFilter,(req,res)=>{
    res.send('<h1>Welcome to profile page</h1>');
})
*/

// Apply middleware on group of ruotes

route.use(reqFilter);
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Home page</h1>');
})
app.get('/about',(req,res)=>{
    res.send('<h1>Welcome to About page</h1>');
})

route.get('/contact',(req,res)=>{
    res.send('<h1>Welcome to contact page</h1>');
})

route.get('/profile',(req,res)=>{
    res.send('<h1>Welcome to profile page</h1>');
})

app.use('/',route);


app.listen(5000);