var express = require("express");
var bodyParser = reqiure("body-parser");


var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });