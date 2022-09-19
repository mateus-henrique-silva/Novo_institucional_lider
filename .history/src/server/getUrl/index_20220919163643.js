"use strict";




const url = "http://127.0.0.1:9090/produtos";
fetch('https://ubahthebuilder.tech/posts/1');
function getUrl() {
  url.get(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
getUrl();
