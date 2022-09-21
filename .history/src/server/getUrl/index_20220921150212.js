"use strict";

async function postData(url = "http://127.0.0.1:9090/produtos") {
  // Default options are marked with *

  const myHeaders = new Headers();

  const myRequest = new Request(, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  });
  

  fetch(myRequest)
  .then((response) => response.blob())
  .then((myBlob) => {
    myImage.src = URL.createObjectURL(myBlob);
  });
  console.log(req.body);
  return response.json(); // parses JSON response into native JavaScript objects
}

postData();
