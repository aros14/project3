// picture slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// map
let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 37.0902, lng: -95.7129 },
    zoom: 4.5,
  });

  new google.maps.Marker({
    position: { lat: 39.5953, lng: -82.5331 },
    map,
    title: "John Glenn Columbus International Airport",
  });

  new google.maps.Marker({
    position: { lat: 35.4676, lng: -97.5164 },
    map,
    title: "Oklahoma City",
  });

  new google.maps.Marker({
    position: { lat: 29.1116, lng: -82.0750 },
    map,
    title: "Ocala, Florida",
  });

  new google.maps.Marker({
    position: { lat: 38.4549, lng: -76.5344 },
    map,
    title: "Clinton, Maryland",
  });

  new google.maps.Marker({
    position: { lat: 35.5919, lng: -78.5426 },
    map,
    title: "Durham, North Carolina",
  });

  new google.maps.Marker({
    position: { lat: 41.79225, lng: -87.61719 },
    map,
    title: "Washington Park in Chicago",
  });

  new google.maps.Marker({
    position: { lat: 40.6023, lng: -75.4714 },
    map,
    title: "John Glenn Columbus International Airport",
  });

  new google.maps.Marker({
    position: { lat: 38.9038, lng: -77.0059 },
    map,
    title: "North DC",
  });

  new google.maps.Marker({
    position: { lat: 29.9466, lng: -90.0945 },
    map,
    title: "Hoffman Triangle Neighborhood",
  });

  new google.maps.Marker({
    position: { lat: 38.5676, lng: -77.3280 },
    map,
    title: "Dumfries",
  });

  new google.maps.Marker({
    position: { lat: 39.29442, lng: -76.69179 },
    map,
    title: "Shopping center in front of Edmondson Westside High School",
  });  
  
  new google.maps.Marker({
    position: { lat: 37.7733, lng: -113.0244 },
    map,
    title: "Enoch",
  });

  new google.maps.Marker({
    position: { lat: 25.9420, lng: -80.2456 },
    map,
    title: "Miami Gardens music video",
  });

  new google.maps.Marker({
    position: { lat: 30.5543, lng: -91.0369 },
    map,
    title: "Central City",
  });

  new google.maps.Marker({
    position: { lat: 32.9621, lng: -96.7864 },
    map,
    title: "North Dallas",
  });
  
  new google.maps.Marker({
    position: { lat: 37.7636, lng: -122.4174 },
    map,
    title: "Mission District",
  });

  new google.maps.Marker({
    position: { lat: 35.9557, lng: -80.0053 },
    map,
    title: "Highpoint",
  });

  new google.maps.Marker({
    position: { lat: 42.2703, lng: -86.0527 },
    map,
    title: "Lee Township",
  });

    new google.maps.Marker({
    position: { lat: 34.76523, lng: -86.48801 },
    map,
    title: "Huntsville strip mall",
  });

  new google.maps.Marker({
    position: { lat: 44.986656, lng: -93.258133 },
    map,
    title: "Hennepin Avenue",
  });

  new google.maps.Marker({
    position: { lat: 31.83200, lng: -84.16423 },
    map,
    title: "Driskell Park",
  });

  new google.maps.Marker({
    position: { lat: 39.7522, lng: -104.9989 },
    map,
    title: "Mayfair",
  });

  new google.maps.Marker({
    position: { lat: 44.9489, lng: -93.2389 },
    map,
    title: "Lake Street/Midtown station",
  });

  new google.maps.Marker({
    position: { lat: 41.4993, lng: -81.6944 },
    map,
    title: "Cleveland",
  });

  new google.maps.Marker({
    position: { lat: 25.4687, lng: -80.4776 },
    map,
    title: "Homestead",
  });

  new google.maps.Marker({
    position: { lat: 33.4484, lng: -112.0740 },
    map,
    title: "Phoenix",
  });

  new google.maps.Marker({
    position: { lat: 42.2711, lng: -89.0940 },
    map,
    title: "Rockford",
  });

  new google.maps.Marker({
    position: { lat: 29.9196, lng: -95.5771 },
    map,
    title: "Northern Houston",
  });

  new google.maps.Marker({
    position: { lat: 36.3490, lng: -119.4186 },
    map,
    title: "Goshen",
  });

  new google.maps.Marker({
    position: { lat: 27.4467, lng: -80.3256 },
    map,
    title: "Fort Pierce",
  });

  new google.maps.Marker({
    position: { lat: 28.8029, lng: -81.2695 },
    map,
    title: "Sanford",
  });
}

initMap();