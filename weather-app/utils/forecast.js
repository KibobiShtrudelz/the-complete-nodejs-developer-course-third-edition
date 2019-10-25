const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/09ac635c4cfa2666cc40f1b864950dc7/${lat},${long}?units=si&lang=en`;

  request({ url, json: true }, (err, res, { error, daily, currently }) => {
    if (err) {
      callback("Unable to connect to weather service!", undefined);
    } else if (error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        `${daily.data[0].summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
