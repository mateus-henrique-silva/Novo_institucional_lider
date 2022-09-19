const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/produtos", (req, res) => {
  return response.json([
    { id:1, title: "Câmera Ezeviz", image:"https://info.liderbrasildistribuidora.com.br/src/Assets/img/Products/CFTV/c1c.png"},r
    { id:2, title: "Câmera Ezeviz", image:"https://info.liderbrasildistribuidora.com.br/src/Assets/img/Products/CFTV/c1c.png"}
  ])
});
app.use(express.static(__dirname + '/src/CSS'));
app.listen(9090);
console.log("start server")