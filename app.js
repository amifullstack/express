const express = require("express");
const port = 5000;
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Order of middleware is important
/*
var myLogger = function(req, res, next) {
  console.log("Logging...");
  next();
  app.use(myLogger);
};
*/

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));

let news = [
  {
    sports: "Cricket",
    description: "Know more about Cricket"
  },
  {
    startups: "Bengaluru",
    description: "Know more about Startups in Bengaluru"
  }
];

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/json", (req, res) => {
  res.json(news);
});
app.listen(port, () => {
  console.log(`We're live at port: ${port}`);
});
