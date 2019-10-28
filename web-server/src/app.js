const path = require("path");
const express = require("express");

const app = express();

const PORT = 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Petar Kolev"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Weather App",
    description: "NodeJS Weather App"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    message: "Halp meh!"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It's 500 graduses",
    location: "Hell"
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
