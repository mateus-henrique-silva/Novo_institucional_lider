"use strict";
const url = "http://127.0.0.1:9090/produtos";

  await fetch(url,{
    mode: 'no-cors'
  }).then(console.log(response));
  

