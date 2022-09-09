const {MongoClient}  = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'youtube'


async function dbConnect(){
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('videos');
  return collection;
}

module.exports = dbConnect