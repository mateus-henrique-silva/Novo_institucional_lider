const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
 
});
app.use(express.static(__dirname + '/src/CSS'));
app.listen(9090);
console.log("start server")