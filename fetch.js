//making map and tiles
const mymap = L.map('issMap').setView([0,0],1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a>';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl,{attribution});
tiles.addTo(mymap);

//making custom icon
const myIcon = L.icon({
    iconUrl: 'iss200.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});

const marker = L.marker([0,0],{icon: myIcon}).addTo(mymap);
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstTime = true;

async function getISS() {

    const response = await fetch(api_url);
    const data = await response.json();
    
    const {latitude,longitude} = data;

    marker.setLatLng([latitude,longitude]);
    if(firstTime){
        mymap.setView([latitude,longitude], 2);
        firstTime = false;
    }
    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2);
    
}

getISS();

setInterval(getISS, 3000);