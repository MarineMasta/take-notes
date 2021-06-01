//// Dependencies, app, and port
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});

//// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//// Routing
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
