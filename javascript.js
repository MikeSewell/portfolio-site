$(function() {
  function init_map() {
    var var_location = new google.maps.LatLng(28.526863, -81.419632)
    var var_mapoptions = {
      center: var_location,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      panControl: false,
      rotateControl: false,
      streetViewControl: false,
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [
            {
              weight: "2.00"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#9c9c9c"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f2f2f2"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              saturation: -100
            },
            {
              lightness: 45
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#eeeeee"
              // color: "#ef8354"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#7b7b7b"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ef8354",

              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#46bcec"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#c8d7d4"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#070707"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        }
      ]
    }
    var var_map = new google.maps.Map(
      document.getElementById("map"),
      var_mapoptions
    )

    var_marker.setMap(var_map)
  }

  google.maps.event.addDomListener(window, "load", init_map)
})
