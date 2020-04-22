const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

const mymap = L.map('issMap').setView([51.505, -0.09], 13);


async function getISS() {

    const response = await fetch(api_url);
    const data = await response.json();
    
    const {latitude,longitude} = data;
    
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;

    console.log(latitude);
    console.log(longitude);
    
}

getISS();