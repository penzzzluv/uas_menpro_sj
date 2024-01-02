var map;


function initMap() {
  var position = new google.maps.LatLng(-7.8163089, 110.3560218);

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -7.8163089, lng: 110.3560218},
    zoom: 20
  });

  var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div id="bodyContent">'+
            '<b>Catholic Church</b></br>'+
            '<b>Hati Kudus Tuhan Yesus Pugeran</b>'
            '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: 'Gereja Hati Kudus Yesus Pugeran'
  })

  infowindow.open(map, marker);
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});

$(function(){
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });

    var shiftWindow = function() { scrollBy(0, -50) };
    if (location.hash) shiftWindow();
      window.addEventListener("hashchange", shiftWindow);
});
