// Função do dia
document.addEventListener('DOMContentLoaded', (event) => {
    let hoje = new Date();
    let dia = String(hoje.getDate()).padStart(2, '0');
    let mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    let ano = hoje.getFullYear();
    
    let dataAtual = `${ano}-${mes}-${dia}`;
    document.getElementById('date').value = dataAtual;
});

// API Google Maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });

    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}




//Header
fetch('template/headerView.html')
.then(response => response.text())
.then(html => {
    // Insira o conteúdo do cabeçalho no elemento com id "header"
    document.getElementById('header').innerHTML = html;
})
.catch(error => console.error('Erro ao carregar o cabeçalho:', error));

//Footer
fetch('template/footerView.html')
.then(response => response.text())
.then(html => {
    document.querySelector('footer').innerHTML = html;
})
.catch(error => console.error('Erro ao carregar o rodapé:', error));