const btnSearch = document.getElementById("btnSearch");
const API_KEY = '1168561e15ab488e8915043a707022aa';
const mainSection = document.querySelector('#main-section');
const weatherInfo = document.querySelector('#weatherInfo');
const defaultLogo = document.querySelector('#default-logo');
const ul = document.querySelector('ul');
const cityName = document.querySelector('#city-name');
const option = {weekday: 'long', day: 'numeric', month: 'long'};
let city;
let state = 0;

function deleteChild(element) {
    let elem = document.querySelector(element);
    
    let child = elem.lastChild;
    while(child) {
        elem.removeChild(child);
        child = elem.lastChild;
    }
}

let btnAddFavoris = document.getElementById("btnAddFavori");
let btnFavori = document.querySelector(".favoris");
let btnAsides = document.querySelector('aside');
let data;

function addFavori() {
    if (data) {
        console.log("storage avant: ", localStorage);
        console.log("response : ", data);

        localStorage.setItem(localStorage.length + 1, data.city_name);
        displayFavori();
        console.log("storage apres: ", localStorage);
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

function displayFavoris(){
    console.log("longeur localstorage : ", localStorage.length);
    for(let i = 1; i <= localStorage.length; i++)
    {
        btnFavori.innerHTML += `
        <button class="btnFavori">
            ${localStorage[i]}
        </button>
        `
    }
}

function getSearch(e) {
  
  if (e.target.innerHTML == 'OK') {
        city = document.getElementById('search').value;
    } else {
        city = e.target.innerHTML;
    }
    const myRequest = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},NC&key=${API_KEY}`);
    myRequest.then(
        response => {
             if (response.status === 200) {
                    response.json().then(data => {
                        data = data;
                        if(ul.lastChild){
                            deleteChild('ul');
                        }
                        for (let i = 0; i < 16; i++){
                            const newli = document.createElement('li')
                            const date = new Date(data['data'][String(i)]['datetime'])
                            newli.innerHTML = date.toLocaleDateString("fr", option) + 
                            "<br><br>" + data['data'][String(i)]['temp'] + '°';
                            ul.appendChild(newli);
                        }
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

function check_favoris() {
    displayFavoris();
}


check_favoris();
btnSearch.addEventListener('click', getSearch);
btnAddFavoris.addEventListener('click', addFavori);
btnAsides.addEventListener('click', getSearch)

