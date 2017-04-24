var service;
var map;
var infowindow;

function test_request() {
    var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8665433, lng: 151.1956316},
      zoom: 15
    });

    var location_desc = document.getElementById("email").value;
    if (!location_desc) location_desc = 30332;
    document.getElementById("near-zipcode").innerHTML = "near " + location_desc;
    var test_request = {
        query: "audiologists near" + location_desc
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(test_request, test_callback);
}

var global_temp_place;

function test_callback(results, status) {
  //Only displaying top 6 results for now...
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var i = 0;
    for (; i < results.length && i < 6; i++) {
        (function(i) {
            var place = results[i];
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
                //Get details of this place
                var detail_request = {
                    placeId: results[i].place_id
                }
                service = new google.maps.places.PlacesService(map);
                service.getDetails(detail_request, function(place, status) {
                    //console.log(place); 
                    //global_temp_place = place;
                    if (document.getElementById("globe"+i)) {
                        document.getElementById("globe"+i).setAttribute("href", place.website);
                    }

                    if (document.getElementById("map_icon"+i)) {
                        document.getElementById("map_icon"+i).setAttribute("href", place.url);
                    }

                    if (document.getElementById("phone"+i)) {
                        document.getElementById("phone"+i).setAttribute("href", "tel:"+place.international_phone_number.replace(' ','').replace(/-/g,''));
                    }

                    a_pi.innerHTML=results[i].formatted_address + "\n" + place.formatted_phone_number;
                    a_namei.innerHTML = results[i].name;
                });
            } else {
                var a_divi = document.getElementById("a_div"+i);
                a_divi.setAttribute("style", "display: none");
            }
        }(i));
    }
    for (; i < 6; i++) {
        (function(i) {
            var a_divi = document.getElementById("a_div"+i);
            a_divi.setAttribute("style", "display: none");
        }(i));
    }
  }
}

