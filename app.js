const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(app.get("port"), function () {
  console.log("Node server is running on port " + app.get("port"));
});

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/products", function (req, res) {
  res.render("products");
});
app.get("/catalogue", function (req, res) {
  res.render("catalogue");
});
