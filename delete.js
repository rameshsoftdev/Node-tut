const dbConnect = require('./ConnectMongoDb');
const deleteData = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({name:'6 video'});
    console.log(result);
}
deleteData();