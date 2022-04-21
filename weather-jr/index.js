const btnSearch = document.getElementById("btnSearch");
const API_KEY = '1168561e15ab488e8915043a707022aa';
const mainSection = document.querySelector('#main-section');
const weatherInfoToday = document.querySelector('#weatherInfoToday');
const weatherInfoWeek = document.querySelector('#weatherInfoWeek');
const defaultLogo = document.querySelector('#default-logo');
const ul = document.querySelector('ul');
const cityName = document.querySelector('#city-name');
const option = { weekday: 'long', day: 'numeric', month: 'long' };
let city;
let state = 0;
let btnAddFavoris = document.getElementById("btnAddFavori");
let btnFavori = document.querySelector(".favoris");
let btnAsides = document.querySelector('aside');
let data;

function addFavori() {
	if (data) {
		localStorage.setItem(localStorage.length + 1, data.city_name);
		displayFavori();
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
	for (let i = 1; i <= localStorage.length; i++) {
		btnFavori.innerHTML += `
		<button class="btnFavori">
			${localStorage[i]}
		</button>
		`
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
	myRequest.then(response => {
		if (response.status === 200) {
			response.json().then(res => {
				console.log("res ", res);
				data = res;

				cityName.textContent = city.toUpperCase();
				weatherInfoToday.innerHTML = `
				<p>Today</p>
				<p class="weatherInfoTodayTemp">${res.data[0].temp}°</p>
				<p>(${res.data[0].min_temp}° - ${res.data[0].max_temp}°) </p>
				<p>${res.data[0].weather.description}</p>
				<img src = https://www.weatherbit.io/static/img/icons/${res.data[0].weather.icon}.png>
				`
				weatherInfoWeek.innerHTML = "";
				for(let i = 1; i < res.data.length; i++)
				{
					weatherInfoWeek.innerHTML += `
					<div id="weatherInfoWeekItemBlock">
						<p id="weatherInfoWeekItemDate">${res.data[i].datetime}</p>
						<div id="weatherInfoWeekItem">
							<img src = https://www.weatherbit.io/static/img/icons/${res.data[i].weather.icon}.png>
							<div id="weatherInfoWeekItemInfos">
								<p class="weatherInfoWeekItemDescription">${res.data[i].weather.description}</p>
								<p class="weatherInfoWeekItemTemp">${res.data[i].temp}°</p>
								<p>(${res.data[i].min_temp}° - ${res.data[i].max_temp}°)</p>
							</div>
						</div>
					</div>
					`
				}
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

