const btnSearch = document.getElementById("btnSearch");
const API_KEY = '1168561e15ab488e8915043a707022aa';
const mainSection = document.querySelector('#main-section');
const weatherInfo = document.querySelector('#weatherInfo');
const defaultLogo = document.querySelector('#default-logo');
const ul = document.querySelector('ul');
const cityName = document.querySelector('#city-name');
const option = { weekday: 'long', day: 'numeric', month: 'long' };
let city;
let state = 0;
let btnAddFavoris = document.getElementById("btnAddFavori");
let btnFavori = document.querySelector(".favoris");
let btnAsides = document.querySelector('aside');
let data1;
let cityFav = [];

for (let a in localStorage) {
    cityFav.push(localStorage[a]);
 }

/*function removeFavori() {
    btnFavori.innerHTML.
    <button class="btnFavori">
        ${localStorage[localStorage.length]}
    </button>
    `
}*/
function addFavori() {
    if (data1 && !cityFav.includes(city)) {
        localStorage.setItem(localStorage.length + 1, city);
        displayFavori();
        cityFav.push(city);
    }
    else {
        console.log("Impossible de rajouter le favoris")
    }
}
function displayFavori() {
    btnFavori.innerHTML += `
    <button class="btnFavori">
        ${localStorage[localStorage.length]}
    </button>
    `
}
function displayFavoris() {
    console.log("longeur localstorage : ", localStorage.length);
    for (let a in localStorage) {
        if (Number(a)) {
        btnFavori.innerHTML += `
        <button class="btnFavori">
            ${localStorage[a]}
        </button>
        `
        }
    }
}
function deleteChild(element) {
    let elem = document.querySelector(element);

    let child = elem.lastChild;
    while (child) {
        elem.removeChild(child);
        child = elem.lastChild;
    }
}
function getSearch(e) {

    if (e.target.innerHTML == 'OK') {
        city = document.getElementById('search').value;
    } else {
        city = e.target.innerHTML;
    }
    const myRequest = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`);
    myRequest.then(
        response => {
            if (response.status === 200) {
                response.json().then(data => {
                    if (ul.lastChild) {
                        deleteChild('ul');
                    }
                    for (let i = 0; i < 16; i++) {
                        const newli = document.createElement('li');
                        const date = new Date(data['data'][String(i)]['datetime']);
                        newli.innerHTML = date.toLocaleDateString("fr", option) +
                            "<br><br>" + data['data'][String(i)]['temp'] + '°';
                        console.log("ici : ", date)
                        ul.appendChild(newli);
                    }
                    data1 = data;
                    defaultLogo.classList.add('hidden');
                    cityName.textContent = city.toUpperCase();
                })
            } else {
                cityName.textContent = 'Aucune ville ne correspond à votre requete ';
                deleteChild('ul');
                defaultLogo.classList.remove('hidden');
            }
        })
}

function arrayRemove(arr, value) { 
    return arr.filter(ele => ele != value);
}

function check_favoris() {
    displayFavoris();
}

function cityKey(rmcity) {
    for( let a in localStorage) {
        console.log(localStorage[a])
        if (localStorage[a] == rmcity){
            console.log(a);
            return a;
        }
    }
}

check_favoris();
document.addEventListener('mousedown', function(event) {
    switch (event.button) {
        case 2:
            const rmcity = event.toElement.innerText;
            const Key = cityKey(rmcity);
            localStorage.removeItem(Key);
            arrayRemove(cityFav, rmcity);
            console.log('deleted'+ rmcity);
            removeFavoris();
            break;
        default:
            return;
    }
});
btnSearch.addEventListener('click', getSearch);
btnAddFavoris.addEventListener('click', addFavori);
btnAsides.addEventListener('click', getSearch)

