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

function getSearch(e) {
    city = document.getElementById('search').value;
    const myRequest = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},NC&key=${API_KEY}`);
    myRequest.then(
        response => {
             if (response.status === 200) {
                    response.json().then(data => {
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

btnSearch.addEventListener('click', getSearch);
