const express = require("express");
const app = express();




  app.get("/ads", (request, response) => {
    return response.json([
      { id: 1, name: "Anúncio 1" },
      { id: 2, name: "Anúncio 2" },
      { id: 3, name: "Anúncio 3 " }
    ]);
  });
});

app.listen(9090);
console.log("start server");
