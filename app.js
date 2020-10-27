//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/projects", function(req, res) {
    res.render("projects");
});

app.get("/contact-me", function(req, res) {
    res.render("contact-me");
});

app.get("/about", function(req, res) {
    res.render("about");
});

let port = process.env.PORT; //public port
if (port == null || port == "") {
  port = 3000; //local port
}

app.listen(port, function() {
  console.log("Server Started...");
});
