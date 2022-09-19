// Initialize and add the map
function initMap() {
    //-21.757747465084552, -41.31976021534401 => Campos dos Goytacazes
    //-22.854805827481766, -43.02506350301768 => São gonçalo
    // The location of Uluru
    const uluru = { lat: -21.757747465084552, lng: -41.31976021534401 };
    const uluruTwo = { lat: -22.854805827481766, lng: -43.02506350301768 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 20,
      center: uluru,
      center:uluruTwo,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;