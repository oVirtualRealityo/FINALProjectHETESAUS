// variabele declareren voor de leaflet map aan vast te hangen
var map = L.map('map').setView([51.30975204981536, 4.384706064886564], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// een icon of marker vastmaken aan de map
var HETEsausIcon = L.icon({
    iconUrl: '../assets/icons/iconforhetesaus.png',

    iconSize:     [56, 56], // size of the icon
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([51.30975204981536, 4.384706064886564], {icon: HETEsausIcon}).addTo(map);