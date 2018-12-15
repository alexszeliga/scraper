var express = require("express");
var exphbs = require("express-handlebars");
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("./models");
var app = express();
var PORT = process.env.PORT || 3000;
// tell express it should parse http requests as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// expose static route
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.get("*", function(req, res) {
  res.render("404");
});

app.listen(3000, () => {
  console.log(`Listing on port ${PORT}`);
});
