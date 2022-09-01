const express = require('express');
const app = express();
app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
    const user = {
        name:'Ramesh',
        emai:'ramesh@watchover24x7.com',
        city:'Banglore',
        skills:[
            'php',
            'js',
            'Node',
            'Css',
            'Html'
        ]
    }
  res.render('profile',{user});
})

app.listen(5000);