"use strict";




const url = "http://127.0.0.1:9090/produtos";

function async getUrl(url) {
  await fetch(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
getUrl();
