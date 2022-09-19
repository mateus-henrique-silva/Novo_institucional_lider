const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/produtos", (req, res) => {
  return response.json([
    {
      id: 1,
      title: "Câmera Ezeviz",
      image:
        "https://info.liderbrasildistribuidora.com.br/src/Assets/img/Products/CFTV/c1c.png",
    },
    {
      id: 2,
      title: "DVR",
      image:
        "https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000132/S000000133/S000000134/OFR000179/M000004906/images/MB-236H-P-HIKVISION.png.thumb.1280.1280.png",
    },
  ]);
});
app.use(express.static(__dirname + "/src/CSS"));
app.listen(9090);
console.log("start server");
