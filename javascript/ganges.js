window.addEventListener('load', (event) => {
    var Stamen_Toner = L.tileLayer('https://stamen-tiles-/%7Bs%7D.a.ssl.fastly.net/toner/%7Bz%7D/%7Bx%7D/%7By%7D%7Br%7D.%7Bext%7D', {
        attribution: 'Map tiles by <a href="http://stamen.com/%22%3EStamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0%22%3ECC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }),
        OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
    });

    var map = L.map('ganges', {
        center: [22.462569, 90.950184],
        zoom: 9,
        layers: [Stamen_Toner]
    });

    var baseMaps = {
        "Openstreetmap": OpenStreetMap_Mapnik,
        "Wit": Stamen_Toner
    }

    // Layer

    var marker = L.marker([22.462569, 90.950184]).bindPopup("Hier is de uitgang van de Ganges.").addTo(map);


    L.control.layers(baseMaps).addTo(map);
});