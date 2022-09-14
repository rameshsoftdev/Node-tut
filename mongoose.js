const mongoose = require('mongoose');
const dburl = 'mongodb://localhost:27017/youtube';

mongoose.connect(dburl);
const videoSchema = mongoose.Schema({
    name:String,
    size:Number
 });
 const videoModel = mongoose.model('videos',videoSchema); // Model for Video collection

 const insertRec = async ()=>{ 
 let record = {
    name:'Weddding Video',
    size:2000
 }
 const data = new videoModel(record);
 const result = await data.save();
 console.log(result);
}
//insertRec();

const updateRec = async ()=>{
    const result = await videoModel.updateOne(
        {name : "Weddding Video"},
        {
            $set:{
                size:100
            }
        }
    );
    console.log(result);
}
//updateRec();

const deleteRec = async ()=>{
    const result = await videoModel.deleteOne({name : "4 video"});
    console.log(result);
}
//deleteRec();

const readRec = async ()=>{
    const result = await videoModel.find();
    console.log(result);
}

readRec();