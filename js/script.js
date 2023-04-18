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

}

initMap();