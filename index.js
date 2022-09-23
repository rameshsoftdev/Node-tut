const { createConnection } = require('mongoose');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"usrc_db"
});
conn.connect((err)=>{
    if(err){
     console.log('Error',err.sqlMessage);
     return false;
    }
});

conn.query('SELECT usr_id,usr_name FROM usr_login limit 0,4',(err,result)=>{
    if(err){
        console.log('Error',err.sqlMessage);
    }else{
        console.log('result',result);
    }
})
