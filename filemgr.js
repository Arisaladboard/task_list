const fs = require("fs");

async function ReadData() {
  try {
      let rawData = fs.readFileSync('listdata.json');
      
      return JSON.parse(rawData)

  } catch (error) {
    console.log("Could not read anything")
  }
}

async function WriteData(dataOut) {
  try {
      fs.writeFileSync('listdata.json',dataOut);
  } catch (error) {
      console.log("Could not write anything")
  }
}

exports.ReadData = ReadData;
exports.WriteData = WriteData;