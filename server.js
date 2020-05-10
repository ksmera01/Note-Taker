// Sets an initial port. We"ll use this later in our listener
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Router

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});