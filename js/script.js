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
let center = {lat: 37.0902, lng: -95.7129};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 4.25,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
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
    title: "Ocala",
  });

  clintonM = new google.maps.Marker({
    position: { lat: 38.4549, lng: -76.5344 },
    map,
    title: "Clinton",
    animation: google.maps.Animation.BOUNCE,
  });

  clintonM.addListener("load", toggleBounce);

  new google.maps.Marker({
    position: { lat: 35.5919, lng: -78.5426 },
    map,
    title: "Durham ",
  });

  washingtonM = new google.maps.Marker({
    position: { lat: 41.79225, lng: -87.61719 },
    map,
    title: "Washington Park in Chicago",
    animation: google.maps.Animation.BOUNCE,
  });

  washingtonM.addListener("load", toggleBounce);

  new google.maps.Marker({
    position: { lat: 40.6023, lng: -75.4714 },
    map,
    title: "John Glenn Columbus International Airport",
  });

  northDCM = new google.maps.Marker({
    position: { lat: 38.9038, lng: -77.0059 },
    map,
    title: "North DC",
    animation: google.maps.Animation.BOUNCE,
  });

  northDCM.addListener("load", toggleBounce);

  new google.maps.Marker({
    position: { lat: 29.9466, lng: -90.0945 },
    map,
    title: "Hoffman Triangle Neighborhood",
  });

  dumfriesM = new google.maps.Marker({
    position: { lat: 38.5676, lng: -77.3280 },
    map,
    title: "Dumfries",
    animation: google.maps.Animation.BOUNCE,
  });

  dumfriesM.addListener("load", toggleBounce);

  baltM = new google.maps.Marker({
    position: { lat: 39.29442, lng: -76.69179 },
    map,
    title: "Shopping center in front of Edmondson Westside High School",
    animation: google.maps.Animation.BOUNCE,
  });

  baltM.addListener("load", toggleBounce);
  
  enochM = new google.maps.Marker({
    position: { lat: 37.7733, lng: -113.0244 },
    map,
    title: "Enoch",
    animation: google.maps.Animation.BOUNCE,
  });

  enochM.addListener("load", toggleBounce);

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

  highpointM = new google.maps.Marker({
    position: { lat: 35.9557, lng: -80.0053 },
    map,
    title: "Highpoint",
    animation: google.maps.Animation.BOUNCE,
  });

  highpointM.addListener("load", toggleBounce);

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

  goshenM = new google.maps.Marker({
    position: { lat: 36.3490, lng: -119.4186 },
    map,
    title: "Goshen",
    animation: google.maps.Animation.BOUNCE,
  });

  goshenM.addListener("load", toggleBounce);

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

  new google.maps.Marker({
    position: { lat: 29.8402, lng: -95.4149 },
    map,
    title: "Northen Houston",
  });

  new google.maps.Marker({
    position: { lat: 37.4138, lng: -79.1422 },
    map,
    title: "Lynchburg",
  });

  new google.maps.Marker({
    position: { lat: 34.0625, lng: -118.1278 },
    map,
    title: "Monterey Park - Lunar New Year celebration",
  });

  new google.maps.Marker({
    position: { lat: 30.4515, lng: -91.1871 },
    map,
    title: "Baton Rouge",
  });

  new google.maps.Marker({
    position: { lat: 33.8650, lng: -84.3371 },
    map,
    title: "Brookhaven",
  });

  new google.maps.Marker({
    position: { lat: 32.5252, lng: -93.7502 },
    map,
    title: "Shreveport",
  });

  new google.maps.Marker({
    position: { lat: 34.8173, lng: -90.3162 },
    map,
    title: "Tunica Resorts",
  });

  new google.maps.Marker({
    position: { lat: 37.7528, lng: -100.0171 },
    map,
    title: "Dodge City",
  });

  new google.maps.Marker({
    position: { lat: 41.7590, lng: -87.3700 },
    map,
    title: "South Shore Apts",
  });

  new google.maps.Marker({
    position: { lat: 37.4636, lng: -122.4286 },
    map,
    title: "Half Moon Bay",
  });

  oaklandM = new google.maps.Marker({
    position: { lat: 37.8044, lng: -122.2712 },
    map,
    title: "Oakland",
    animation: google.maps.Animation.BOUNCE,
  });

  oaklandM.addListener("load", toggleBounce);

  new google.maps.Marker({
    position: { lat: 37.8152, lng: -79.1831 },
    map,
    title: "Red Springs",
  });

  new google.maps.Marker({
    position: { lat: 40.7357, lng: -74.1724 },
    map,
    title: "Newark",
  });

  new google.maps.Marker({
    position: { lat: 40.0379, lng: -76.3055 },
    map,
    title: "Lancaster",
  });

  new google.maps.Marker({
    position: { lat: 34.1013, lng: -118.4163 },
    map,
    title: "Beverly Crest",
  });

  new google.maps.Marker({
    position: { lat: 40.0428, lng: -75.0766 },
    map,
    title: "Oxford Circle",
  });

  new google.maps.Marker({
    position: { lat: 30.2672, lng: -97.7431 },
    map,
    title: "Austin",
  });

  new google.maps.Marker({
    position: { lat: 33.4513, lng: -79.5609 },
    map,
    title: "Andrews",
  });

  new google.maps.Marker({
    position: { lat: 40.0270, lng: -82.9335 },
    map,
    title: "NE Columbus",
  });

  new google.maps.Marker({
    position: { lat: 36.0726, lng: -79.7920 },
    map,
    title: "Greensboro",
  });

  dallasM = new google.maps.Marker({
    position: { lat: 32.7767, lng: -96.7970 },
    map,
    title: "Dallas",
    animation: google.maps.Animation.BOUNCE,
  });

  dallasM.addListener("load", toggleBounce);

  new google.maps.Marker({
    position: { lat: 28.0395, lng: -81.9498 },
    map,
    title: "Lakeland",
  });

  new google.maps.Marker({
    position: { lat: 35.9940, lng: -78.8986 },
    map,
    title: "Durham",
  });
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}