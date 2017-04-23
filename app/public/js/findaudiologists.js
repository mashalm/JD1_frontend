var service;
var map;
var infowindow;

function test_request() {
    var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

    map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

    var location_desc = document.getElementById("email").value;
    if (!location_desc) location_desc = 30332;
    var test_request = {
        query: "audiologists near" + location_desc
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(test_request, test_callback);
}

function test_callback(results, status) {
  //Only displaying top 6 results for now...
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var i = 0;
    for (; i < results.length && i < 6; i++) {
      var place = results[i];
      console.log(place.formatted_address);
      var a_pi = document.getElementById("a_p"+i);
      var a_namei = document.getElementById("a_name"+i);
      var mapi = document.getElementById("map"+i);
      if (mapi) {
          this_map = new google.maps.Map(document.getElementById("map"+i), {
              center: results[i].geometry.location,
              zoom: 17
          });
          this_marker = new google.maps.Marker({
              position: results[i].geometry.location,
              map: this_map
          });
      }
      if (a_pi && a_namei) {
          a_namei.innerHTML = results[i].name;
          a_pi.innerHTML = results[i].formatted_address;
      } else {
          var a_divi = document.getElementById("a_div"+i);
          a_divi.setAttribute("style", "display: none");
      }
    }
    for (; i < 6; i++) {
        var a_divi = document.getElementById("a_div"+i);
        a_divi.setAttribute("style", "display: none");
    }
  }
}

