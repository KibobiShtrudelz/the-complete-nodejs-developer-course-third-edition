const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

const PORT = 3000;
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Petar Kolev"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Weather App",
    name: "Petar Kolev",
    description: "NodeJS Weather App"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "Help page",
    title: "Halp meh!",
    name: "Pecimir"
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.send({
      errorMessage: "You must provide an address!"
    });
  }

  geocode(address, (err, { latitude, longitude, location }) => {
    if (err) {
      return res.send({
        errorMessage: "Something went wrong! Please try again later."
      });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (err) {
        return res.send({
          errorMessage: "Something went wrong! Please try again later."
        });
      }

      res.send({
        location,
        forecast: forecastData,
        address
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      errorMessage: "You must provide a search term!"
    });
  }

  console.log("req", req.query.search);
  res.send({ products: [] });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help",
    name: "Peci Kolec",
    errorMessage: "Help article not found!"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error 404",
    name: "Peci Kolec",
    errorMessage: "Page Not Found!"
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
