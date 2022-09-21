"use strict";

async function postData(url = "http://127.0.0.1:9090/produtos") {
  // Default options are marked with *

  const myHeaders = new Headers();

  const myRequest = new Request(url, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  });
  

  fetch(myRequest)
  .then((response) => response.json())
  .then((myBlob) => {
    console.log(myBlob[1].image);
  });
 
  // parses JSON response into native JavaScript objects
}

postData();
