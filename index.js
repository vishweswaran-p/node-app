//importing node framework
var express = require("express");
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
  console.log("Request received"):
 res.send("Hello from Jenkins");
});
//listen to port 3000 by default
app.listen(process.env.PORT || 8000);
 
module.exports = app;

