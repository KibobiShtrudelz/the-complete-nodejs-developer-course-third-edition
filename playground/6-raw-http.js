const https = require("https");

const url =
  "https://api.darksky.net/forecast/09ac635c4cfa2666cc40f1b864950dc7/40,-75";

const request = https.request(url, res => {
  let data = "";

  res.on("data", chunk => {
    data += chunk.toString();
  });

  res.on("end", () => {
    const body = JSON.parse(data);
    console.log("body", body);
  });
});

request.on("error", err => {
  console.log("error", err);
});

request.end();
