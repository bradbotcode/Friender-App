//dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express & port 
var app = express();
var PORT = process.env.PORT || 3030;

//middleware for parsing req bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());

//routes
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(PORT, function () {
    console.log("Friend-Finder app is listening on PORT: " + PORT);
});