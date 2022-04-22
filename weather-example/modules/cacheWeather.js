const cache = {};

const addToCache = (cityName, countryName, weather) => {
	cache[cityName + countryName] = weather;
}
const checkCache = (cityName, countryName) => {
	return cache[cityName + countryName];
}

export { addToCache, checkCache };
