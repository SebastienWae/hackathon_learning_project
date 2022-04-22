import { fetchWeather } from './modules/fetchWeather.js';
import { debounce } from './modules/utils.js';
import { updateDisplay } from './modules/displayWeather.js';
import { addToCache, checkCache } from './modules/cacheWeather.js';

const updateWeather = async (e) => {
	try {
		let weather = checkCache(e.target.value, "FR");
		if (!weather) {
			weather = await fetchWeather(e.target.value, "FR");
			addToCache(e.target.value, "FR", weather);
		}
		updateDisplay(weather);
	} catch (err) {
		updateDisplay({error: err.message});
	}
}

const cityInput = document.querySelector("#city-input");
cityInput.addEventListener('input', debounce(updateWeather, 800));
