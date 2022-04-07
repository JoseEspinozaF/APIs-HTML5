function initScript() {
    const entrada = document.getElementById("map")
    obtenerUbicacion()
}

function obtenerUbicacion() {
    //comprobamos si el navegador soporta esta api
    if (navigator.geolocation) {
        //getCurrentPosition: devulve posicion   del usuario, 
        navigator.geolocation.getCurrentPosition(MostrarPosicion, erorres);
    } else {
        entrada.innerHTML = "<p>El navegador No soporta Geolocalizacion</p>"
    }
}

function erorres(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            entrada.innerHTML = "Usuario denegó la solicitud de Geolocalización."
            break;
        case error.POSITION_UNAVAILABLE:
            entrada.innerHTML = "La información de ubicación no está disponible."
            break;
        case error.TIMEOUT:
            entrada.innerHTML =
                "Se agotó el tiempo de espera de la solicitud para obtener la ubicación del usuario."
            break;
        case error.UNKNOWN_ERROR:
            entrada.innerHTML = "Un error desconocido ocurrió."
            break;
    }
}

function MostrarPosicion(position) {
    const latitud = position.coords.latitude
    const longitud = position.coords.longitude
    document.getElementById("mapLatitudeLongitude").innerHTML = "Latitud: " + latitud +
        "<br>Longitud: " + longitud;
    var coord = {
        lat: latitud,
        lng: longitud
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });

}

function dragable() {
    while (true) {
        document.getElementById("div1").innerHTML="<img src='img/boton-x.png' draggable='true' ondragstart='drag(event)' id='drag1' width='88' height='31'>"
    }
}