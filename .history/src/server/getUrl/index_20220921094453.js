"use strict";
const url = "http://127.0.0.1:9090/produtos";

function getUrl() {
  fetch(url)
    .then((response) => {
      response.json();
      
    })
    .then((date)=>{
      console.log(date)
    })
    .catch((error) => {
      console.log(error);
    });
}
getUrl();
