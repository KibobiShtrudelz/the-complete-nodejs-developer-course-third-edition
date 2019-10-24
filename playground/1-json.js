const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

const updatedData = JSON.stringify({
  ...data,
  name: "Petar",
  age: 30
});

fs.writeFileSync("1-json.json", updatedData);
