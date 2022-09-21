"use strict";

async function postData(url = "http://127.0.0.1:9090/produtos") {
  // Default options are marked with *
  //tittle-api
  const apiImage = document.getElementById('img-api')
  const apiTitlle= document.getElementById('tittle-api')
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
    apiImage.src = myBlob[1].image;
    apiTitlle.innerText = myBlob[1].name;
    console.log(myBlob[1].image);
  });
 
  // parses JSON response into native JavaScript objects
}

postData();
