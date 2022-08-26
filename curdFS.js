const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'curd');
const filePath = `${dirPath}/apple.txt`;

// Create file
  // fs.writeFileSync(filePath, 'This is test file');
// Update file
  // fs.appendFileSync(filePath,' and it is created by Ramesh');
// Read file
/* 
  fs.readFile(filePath,'utf8',(err,item)=>{
       console.log(item);
  })
 */
// Rename file
/*  
  fs.rename(filePath, `${dirPath}/shreedevi.txt`, (err) => {
     if(!err) console.log('File updated');
  })
 */

// Deleting File 
fs.unlinkSync(`${dirPath}/shreedevi.txt`) ; 



