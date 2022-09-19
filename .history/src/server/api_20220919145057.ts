const express = require("express");
const app = express();




  app.get("/produtos", (request, response) => {
    return response.json([
      { id: 1, name: "Anúncio 1", image:"" },
      { id: 2, name: "Anúncio 2" },
    
    ]);
  });


app.listen(9090);
console.log("start server");
