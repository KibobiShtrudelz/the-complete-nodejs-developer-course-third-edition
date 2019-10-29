const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/09ac635c4cfa2666cc40f1b864950dc7/${lat},${long}?units=si&lang=en`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
