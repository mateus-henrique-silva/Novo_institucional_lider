const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/produtos", (req, res) => {
  return response.json([
    { id:1, title: ""}
  ])
});
app.use(express.static(__dirname + '/src/CSS'));
app.listen(9090);
console.log("start server")