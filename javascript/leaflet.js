var map = L.map('map').setView([51.9678091, 4.1527201], 11,5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiYmFzdmFuZGVydmVsZGVuIiwiYSI6ImNrMzh2ZDlzNzA5bDYzbHQ5Zmx1NXk4aDEifQ.NVsCpQB2ehZaOB-I8oxoDA'
}).addTo(map);

var marker = L.marker([51.9678091, 4.1527201]).addTo(map);
marker.bindPopup("<b>RMS-delta</b><br>RMS staat voor Rijn, Maas en Schelde. Deze komen allemaal uit in Nederland, waaronder hier bij Rotterdam :)").openPopup();

var marker = L.marker([51.358585,4.2278876]).addTo(map);
marker.bindPopup("<b>RMS-delta</b><br>Ik BeN dE sChElDe :)").openPopup();