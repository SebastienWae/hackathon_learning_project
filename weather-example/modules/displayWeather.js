const updateDisplay = (weather) => {
	const data = document.querySelector("#data")
	data.textContent = JSON.stringify(weather, null, 2);
}

export { updateDisplay };
