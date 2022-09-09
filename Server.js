const dbConnect = require('./ConnectMongoDb');

// Read Method 1
const getdata = ()=>{
    dbConnect().then((resp)=>{
        resp.find({name: 'third video'}).toArray().then((data)=>{
           console.log('getdata => ',data);
        })
    });
}

// Read Method 2 (Commonly used method)
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log('Main => ',data);
}



const insertRec = async ()=>{
    let collection = await dbConnect();
    let result = await collection.insertMany(
        [
            {
                name: '4 video',
                size: 1024,
                created_by: 'Pratham',
                location: 'Banglore'
            },
            {
                name: '5 video',
                size: 1024,
                created_by: 'Pratham',
                location: 'Banglore'
            },
            {
                name: '6 video',
                size: 1024,
                created_by: 'Pratham',
                location: 'Banglore'
            }
        ]
    )
    if(result.acknowledged){
      console.log(`Total ${result.insertedCount} Records created`);
    }
}
insertRec();
main();
//getdata();