// const fs = require("fs");

// async function ReadData() {
//   fs.readFile('./listdata.json', 'utf-8', (err, jsonString) =>{
//     if (err){
//       console.log(err)
//     } else {
//       try {
//        console.log('into read function')
//         const data = JSON.parse(jsonString);
//         console.log(data)
//       }
//       catch (err){
//         console.log('Error Parsing JSON',err)
//       }
//     }
//   })


// }

// async function WriteData(dataOut) {
//   try {
//     fs.readFile('listdata.json', function(err, data){
//       var json = JSON.parse(data)
//       json.push(data)
//       fs.writeFile('listdata.json',JSON.stringify(json))
//         console.log('The data was appended to the file')
//     })
    
//   } catch (error) {
//       console.log("Could not write anything")
//   }
// }

// exports.ReadData = ReadData;
// exports.WriteData = WriteData;