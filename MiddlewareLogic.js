module.exports = reqFilter = (req,res,next)=>{
    console.log('reqFilter');
    if(!req.query.age){
      res.send('<h1>Please pass the age</h1>');
    }else if(req.query.age<18){
     res.send('<h1>You cannot access thr page</h1>');
    }else{
     next();
    }
 }