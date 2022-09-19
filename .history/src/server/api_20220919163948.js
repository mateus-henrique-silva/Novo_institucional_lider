express = require("express");

const cors = require("cors");
const app = express();

app.use(cors());

app.get("/produtos", async (request, response) => {
  return await response.json([
    {
      id: 1,
      name: "Anúncio 1",
      image:
        "https://info.liderbrasildistribuidora.com.br/src/Assets/img/Products/CFTV/c1c.png",
    },
    {
      id: 2,
      name: "Anúncio 2",
      image:
        "https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000132/S000000133/S000000134/OFR000179/M000004906/images/MB-236H-P-HIKVISION.png.thumb.1280.1280.png",
    },
  ]);
});

app.listen(9090);
console.log("start server");
