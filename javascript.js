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

// // load page first
// $(document).ready(function() {
//   var latitude = -6.565067,
//     longitude = 106.805026,
//     map_zoom = 17
//   var is_internetExplorer11 =
//     navigator.userAgent.toLowerCase().indexOf("trident") > -1
//   var marker_url = is_internetExplorer11
//     ? "http://gdurl.com/Uibp"
//     : "http://gdurl.com/kVn2"
//   var main_color = "#00z",
//     saturation_value = -20,
//     brightness_value = 5
//   var style = [
//     {
//       elementType: "labels",
//       stylers: [{ saturation: saturation_value }]
//     },
//     {
//       featureType: "poi",
//       elementType: "labels",
//       stylers: [{ visibility: "off" }]
//     },
//     {
//       featureType: "road.highway",
//       elementType: "labels",
//       stylers: [{ visibility: "off" }]
//     },
//     {
//       featureType: "road.local",
//       elementType: "labels.icon",
//       stylers: [{ visibility: "off" }]
//     },
//     {
//       featureType: "road.arterial",
//       elementType: "labels.icon",
//       stylers: [{ visibility: "off" }]
//     },
//     {
//       featureType: "road",
//       elementType: "geometry.stroke",
//       stylers: [{ visibility: "off" }]
//     },
//     {
//       featureType: "transit",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "poi",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "poi.government",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "poi.sport_complex",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "poi.attraction",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "poi.business",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "transit",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "transit.station",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "landscape",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "road",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "road.highway",
//       elementType: "geometry.fill",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     },
//     {
//       featureType: "water",
//       elementType: "geometry",
//       stylers: [
//         { hue: main_color },
//         { visibility: "on" },
//         { lightness: brightness_value },
//         { saturation: saturation_value }
//       ]
//     }
//   ]
//   var map_options = {
//     center: new google.maps.LatLng(latitude, longitude),
//     zoom: map_zoom,
//     panControl: false,
//     zoomControl: true,
//     mapTypeControl: false,
//     streetViewControl: false,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     scrollwheel: false,
//     styles: style,
//     zoomControlOptions: {
//       style: google.maps.ZoomControlStyle.SMALL,
//       position: google.maps.ControlPosition.BOTTOM_CENTER
//     }
//   }
//   var map = new google.maps.Map(document.getElementById("map"), map_options)
//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(latitude, longitude),
//     map: map,
//     visible: true,
//     icon: marker_url
//   })
// })
