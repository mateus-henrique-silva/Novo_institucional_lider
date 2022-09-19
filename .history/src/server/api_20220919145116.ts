const express = require("express");
const app = express();




  app.get("/produtos", (request, response) => {
    return response.json([
      { id: 1, name: "Anúncio 1", image:"https://info.liderbrasildistribuidora.com.br/src/Assets/img/Products/CFTV/c1c.png" },
      { id: 2, name: "Anúncio 2", image },
    
    ]);
  });


app.listen(9090);
console.log("start server");
