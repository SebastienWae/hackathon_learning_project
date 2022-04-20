try {
	let	buttons = document.querySelectorAll("button");
	let values = [];
	let operator = '';
	let sum = 0;

	const display_calcul = function(value) {
		document.querySelector("#calcul").innerHTML += value;
	}

	const display_sum = function() {
		document.querySelector("#sum").innerHTML = sum;
	}

	const update_sum = function(number) {
		sum = parseInt(number);
	}

	const operate_sum = function(operator, number) {
		console.log( "number " + number + ", sum : "+ sum)
		if (operator != '')
			console.log ( + ", operator :" + operator)
		if (operator === '+') sum += parseInt(number);
		if (operator === '-') sum -= parseInt(number);
		if (operator === 'x') sum *= parseInt(number);
		if (operator === '/') sum /= parseInt(number);
		if (operator === '=') sum = parseInt(number);
	}

	const update_values = function(values, n) {
		for(let i = 0; i <= n; i++) {
			values.shift();
		}
	}

	const parse_values = function(values) {
		console.log("values : ", values);
		let number = '';
		for(let i = 0; i < values.length; i++) {
			if (values[i] >= '0' && values[i] <= '9')
				number += values[i];
			else if (values[i] == '+' || values[i] == '-' || values[i] == 'x' || values[i] == '/')
			{
				if (operator != '')
					operate_sum(operator, number)
				else
					update_sum(number);

				operator = values[i];

				update_values(values, i);
				number = '';
				console.log("sum : ", sum);
				display_sum();
			}
			else if (values[i] == '=')
			{

			}

		}

		console.log("number: ", number);
		console.log("operator: ", operator);

	}

	const getInput = function (e) {
		value = e.target.innerHTML;
		values.push(e.target.innerHTML);
		display_calcul(values[values.length - 1]);
		parse_values(values);
	}


	buttons.forEach(b => {
		b.addEventListener('click', getInput);
	})
}
catch (error) {

}










/*
if (j === 'C')
		{
			document.querySelector(".resultat").innerHTML = document.querySelector(".resultat").innerHTML.slice(0, -1);
			if (op === 0) {
				int1 = Number(String(int1).slice(0, -1))
			}
			if (op !== 0) {
				if (int2 !== ''){
					int2 = Number(String(int2).slice(0, -1))
				}
				else {
					op = 0;
				}
			}
		}
		else {
			document.querySelector(".resultat").innerHTML += `${j}`;
			if (j === 'Del'){
				j = init(j);
				document.querySelector(".resultat").innerHTML = ``;
			}
			if (j === '+' || j === '-' || j === '/' || j === 'x'){
				op = j;
			}
			else if (j === '='){
				let resultat = ft_calc(int1, op, int2);
				j = init(j);
				document.querySelector(".resultat").innerHTML = `${resultat}`;
			}
			else if (op === 0){
				int1+=j;
			}
			else if (op !== 0){
				int2+=j;
			}
		}
*/
