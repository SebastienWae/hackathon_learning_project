const API_KEY = "1168561e15ab488e8915043a707022aa";

const fetchWeather = async (cityName, countryName) => {
	const url = new URL("https://api.weatherbit.io/v2.0/forecast/daily");
	url.searchParams.append("city", cityName);
	url.searchParams.append("country", countryName);
	url.searchParams.append("key", API_KEY);
	const req = await fetch(url)
	if (req.status !== 200)
		throw new Error("Error fetching weather");
	else
	{
		const data = await req.json();
		return data;
	}
}

export  { fetchWeather };
