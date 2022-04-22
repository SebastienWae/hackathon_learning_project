const weatherInfoToday = document.querySelector('#weatherInfoToday');
const weatherInfoWeek = document.querySelector('#weatherInfoWeek');
const defaultLogo = document.querySelector('#default-logo');
const ul = document.querySelector('ul');
const cityName = document.querySelector('#city-name');
const option = { weekday: 'long', day: 'numeric', month: 'long' };
let city;
let state = 0;
let btnAddFavoris = document.getElementById("btnAddFavori");
let btnRemoveFavoris = document.getElementById("btnRemoveFavori");
let btnFavori = document.querySelector(".favoris");
let btnAsides = document.querySelector('aside');
let data;

function addFavori() {
	if (data) {
		let isAlreadyExit = 0;
		for(let i = 1; i <= localStorage.length; i++) {
			if (data.city_name == localStorage[i] && localStorage[i] != undefined) isAlreadyExit = 1;
		}
		if (isAlreadyExit == 0) {
			localStorage.setItem(localStorage.length + 1, data.city_name);
			displayFavori();
		}	
	}
	else {
		console.log("Impossible de rajouter le favoris")
	}
}
function RemoveFavori() {
	btnFavori.innerHTML = '';
	for(let i = 1; i <= localStorage.length; i++) {
		if (localStorage[i] == data.city_name && localStorage[i] != undefined) {
			localStorage.removeItem(i);
			while (i <= localStorage.length + 1) {
				if (localStorage[i + 1] != undefined) {
					localStorage.setItem(i, localStorage[i + 1]);
					localStorage.removeItem(i + 1);
				}
				i++;
			}
		}
	}
	displayFavoris();
}
function displayFavori() {
	btnFavori.innerHTML += `
	<button class="btnFavori">
		${localStorage[localStorage.length]}
	</button>
	`
}
function displayFavoris() {
	for (let i = 1; i <= localStorage.length; i++) {
		if (localStorage[i] != undefined) {
			btnFavori.innerHTML += `
			<button class="btnFavori">
				${localStorage[i]}
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
function check_favoris() {
	displayFavoris();
}
function check_keyboard_enter(e) {
	if (e.key == 'Enter') getSearch(null, undefined, 'enter')
}
function getSearch(e, test, keyboard) {
	if (keyboard) {
		city = document.querySelector('input').value;
	} else if (test) {
		city = test;
	} else if (e.target.innerHTML == 'OK') {
		city = document.getElementById('search').value;
	} else {
		city = e.target.innerHTML;
	}
	const myRequest = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`);
	myRequest.then(response => {
		if (response.status === 200) {
			response.json().then(res => {
				console.log("res ", res);


				// display infos day
				cityName.textContent = res.city_name.toUpperCase();
				weatherInfoToday.innerHTML = `
				<p>Today</p>
				<p class="weatherInfoTodayTemp">${res.data[0].temp}°</p>
				<p>(${res.data[0].min_temp}° - ${res.data[0].max_temp}°) </p>
				<p>${res.data[0].weather.description}</p>
				<img src = https://www.weatherbit.io/static/img/icons/${res.data[0].weather.icon}.png>
				`


				// display infos week
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
				
				
				// display favorite button
				let isAlreadyExit = 0;
				for(let i = 1; i <= localStorage.length; i++) {
					if (res.city_name == localStorage[i] && localStorage[i] != undefined) isAlreadyExit = 1;
				}
				if (isAlreadyExit == 0) {
					btnRemoveFavoris.style.display = "none"
					btnAddFavoris.style.display = "block"
				}
				else {
					btnAddFavoris.style.display = "none"
					btnRemoveFavoris.style.display = "block"
				}


				data = res;
			})
		} else {
			cityName.textContent = 'Aucune ville ne correspond à votre requete ';
		}
	})
}




if (localStorage.length > 0)
{
	for(let i = 1; i <= localStorage.length;i++)
		if (localStorage[i] != undefined) {
			getSearch(null, localStorage[i]);
			break;
		}
}

check_favoris();
btnAddFavoris.addEventListener('click', addFavori);
btnRemoveFavoris.addEventListener('click', RemoveFavori);
btnSearch.addEventListener('click', getSearch);
document.addEventListener('keydown', check_keyboard_enter);
btnAsides.addEventListener('click', getSearch);
