"use strict";
const url = "http://127.0.0.1:9090/produtos";
function async getUrl(){  await fetch(url,{
    mode: 'no-cors'
  }).then(console.log(response));
  
}
