try {
	let	buttons = document.querySelectorAll("button");
	let values = [];

	const display_calcul = function (value) {
		document.querySelector("#resultat").innerHTML += value;
	}

	const getInput = function (e) {
		values.push(e.target.innerHTML);
		console.log("values : ", values);
		display_calcul(values[values.length - 1]);
	}






	buttons.forEach(b => {
		b.addEventListener('click', getInput);
	})
}
catch (error) {

}
