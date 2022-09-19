const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.use(express.static(__dirname + '/'));
app.listen(9090);
console.log("start server")