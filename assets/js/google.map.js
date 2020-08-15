var myCenter = new google.maps.LatLng(39.166367, -84.637448);

function initialize() {
    var mapProp = {
        center: myCenter,
        scrollwheel: false,
        zoom: 10,
        zoomControl: true,
        mapTypeControl: true,
        streetViewControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: 'assets/img/ext/map-marker.png',
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
