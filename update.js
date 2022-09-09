const dbConnect = require('./ConnectMongoDb');

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
            { name:"6 video" },
            { $set:{size:800,created_by:'Pratiksha Rathod'} }
        )
    console.log(result);
}

updateData();