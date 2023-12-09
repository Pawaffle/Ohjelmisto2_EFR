// map initialization
const map = L.map('map').setView([63, 43], 3.8)  // ([lat "korkeus", long "leveys"], zoom)

// svg layer

var imageUrl = '../img/Russia_Rail_Map.svg',
    imageBounds = [
        [0, 0],
        [100, 100]
    ];

L.imageOverlay(imageUrl, imageBounds).addTo(map);


/*   markers   */

var SaintPeterburg = L.marker([67.39868, 15.3]).addTo(map);
var Murmansk = L.marker([70.15467, 25.73]).addTo(map);
var Arkhangelsk = L.marker([67.444719, 24.4]).addTo(map);
var Pechora = L.marker([65.783985, 32.56]).addTo(map);
var Vorkuta = L.marker([66.40648, 37.276027]).addTo(map);
var Yaroslavl = L.marker([64.852794, 18.2]).addTo(map);
var Moscow = L.marker([64.53859, 14.9]).addTo(map);
var Voronezh = L.marker([62.348729, 13.1]).addTo(map);
var Krasnodar = L.marker([59.235846, 6.5]).addTo(map);
var Volgograd = L.marker([59.326614, 13.35]).addTo(map);
var Astrakhan = L.marker([57.175875, 14.2]).addTo(map);
var Kazan = L.marker([62.183766, 21]).addTo(map);
var Perm = L.marker([62.216313, 27.36]).addTo(map);
var Yekaterinburg = L.marker([60.763599, 29.65]).addTo(map);
var Saratov = L.marker([60.4, 16.5]).addTo(map);
var Ufa = L.marker([60.165642, 25.706749]).addTo(map);
var Kurgan = L.marker([59.477617, 31.95]).addTo(map);
var Orenburg = L.marker([58.840288, 23]).addTo(map);
var Orsk = L.marker([57.813579, 25.57]).addTo(map);
var Tyumen = L.marker([60.336036, 33.3]).addTo(map);
var Surgut = L.marker([62.189449, 40]).addTo(map);
var NovyUrengoy = L.marker([64.631792, 43.9]).addTo(map);
var Omsk = L.marker([58.070165, 38.05]).addTo(map);
var Krasnoyarsk = L.marker([58.081783, 52.8]).addTo(map);
var Bratsk = L.marker([58.509039, 58.65]).addTo(map);
var Irkutsk = L.marker([55.811589, 61.73]).addTo(map);
var Chita = L.marker([56.739684, 69.32]).addTo(map);
var Tynda = L.marker([60.773494, 75.5]).addTo(map);
var Tommot = L.marker([62.384446, 73.6]).addTo(map);
var UstIlimsk = L.marker([59.859554, 59.2]).addTo(map);
var Urgal = L.marker([59.95, 83.7]).addTo(map);
var Khabarovsk = L.marker([59.125561, 87.7]).addTo(map);
var Vladivostok = L.marker([55.074125, 88.921864]).addTo(map);



/*    location by click    */

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var url= 'http://127.0.0.1:3000';
var playerName;
var gameId;

// fetch function

async function fetchData(address) {
    const response = await fetch(address);
    const data = await response.json();

    return data;
};

// Setting up

 document.getElementById('player-form').addEventListener('submit', async function (evt) {
        evt.preventDefault();

        playerName = document.getElementById('player-input').value;
        const difficulty = document.querySelector('[name=difficulty]').value;

        const address = `${url}/${playerName}/${difficulty}`;
        const data = await fetchData(address)
        gameId = data.GameID;

        document.getElementById('changeName').innerText = playerName;
        document.getElementById('disappear').innerHTML = '';
        });



// buttons

document.getElementById('restart').addEventListener('click', function () {
    location.reload();
});

document.getElementById('story').addEventListener('click', function () {
    const story = document.getElementById('story-menu');
    story.showModal();
});

document.getElementById('close-story').addEventListener('click', function () {
    const story = document.getElementById('story-menu');
    story.close();
});

document.getElementById('manual').addEventListener('click', function () {
    const help = document.getElementById('manual-menu');
    help.showModal();
});

document.getElementById('close-manual').addEventListener('click', function () {
    const help = document.getElementById('manual-menu');
    help.close();
});
