const express = require('express');
const conn = require('./config');
const app = express();
app.use(express.json());
app.get('/get-users',(req,resp)=>{
    conn.query('SELECT id,name,email,age FROM users',(err,result)=>{
        if(err){
            console.log('Error',err.sqlMessage);
        }else{
            resp.send(result)
        }
    })
})
app.post('/post-user',(req,resp)=>{
    let user = req.body;
    conn.query("INSERT INTO users set ?",user,(err,result,fields)=>{
        if(err){
            console.log('Error',err.sqlMessage);
        }else{
            resp.send(result)
        }
    })
})

app.put('/update-user/:id',(req,resp)=>{
    let user = [req.body.name,req.body.email,req.body.age,req.params.id];
    
    conn.query("UPDATE users set name = ?, email = ?, age = ? WHERE id = ?",user,(err,result,fields)=>{
        if(err){
            console.log('Error',err.sqlMessage);
        }else{
            resp.send(result)
        }
    })
})

app.delete('/delete-user/:id',(req,resp)=>{
    let user = [req.params.id];
    
    conn.query("DELETE FROM users WHERE id = ?",user,(err,result,fields)=>{
        if(err){
            console.log('Error',err.sqlMessage);
        }else{
            resp.send(result)
        }
    })
})

app.listen(5000)


/* 
conn.query('SELECT usr_id,usr_name FROM usr_login limit 0,4',(err,result)=>{
    if(err){
        console.log('Error',err.sqlMessage);
    }else{
        console.log('result',result);
    }
})
 */