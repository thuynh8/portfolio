/**
 * Created by Tyler Huynh on 1/4/17.
 * Google Map API
 */
function initMap() {
    var uluru = {lat: 33.8025, lng: -117.9922};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var customIcon = 'images/map-marker.png';

    var contentString = "<div style='color:#000000;'><h4>Where I'm Located</h4><p>Stanton, California</p></div>";

    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: customIcon
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
        toggleBounce();
    });

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null);
            }, 2000);
        }
    }
}



