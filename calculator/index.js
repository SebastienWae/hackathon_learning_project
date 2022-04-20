try {
	let	buttons = document.querySelectorAll("button");
	let values = [];
	let operator = '';
	let sum = 0;

	const display_calcul = function(value) {
		if (value != '=')
			document.querySelector("#calcul").innerHTML += value;
	}
	const display_sum = function() {
		document.querySelector("#sum").innerHTML = sum;
	}
	const update_sum = function(number) {
		sum = parseFloat(number);
	}
	const operate_sum = function(operator, number) {
		if (operator === '+') sum += parseFloat(number);
		if (operator === '-') sum -= parseFloat(number);
		if (operator === 'x') sum *= parseFloat(number);
		if (operator === '/') sum /= parseFloat(number);
		if (operator === '%') sum /= 100;
	}
	const update_values = function(values, n) {
		for(let i = 0; i <= n; i++) {
			values.shift();
		}
	}
	const parse_values = function(values) {
		let number = '';
		for(let i = 0; i < values.length; i++) {
			if (values[i] >= '0' && values[i] <= '9' || values[i] == '.')
				number += values[i];
			else if (values[i] == '+' || values[i] == '-' || values[i] == 'x'
				|| values[i] == '/' || values[i] == '=' || values[i] == '%')
			{
				if (operator != '')
					operate_sum(operator, number)
				else
					update_sum(number);
				operator = values[i];
				update_values(values, i);
				number = '';
				display_sum();
			}
			else if (values[i] == 'C')
			{
				sum = 0;
				number = '';
				operator = '';
				update_values(values, values.length);
				document.querySelector("#calcul").innerHTML = '';
				document.querySelector("#sum").innerHTML = 0;
			}
		}
	}
	const getInput = function (e) {
		value = e.target.innerHTML;
		if (e.target.innerHTML != "Del") {
			
			values.push(e.target.innerHTML);
			if (values.length >= 15)
				alert("HAAAAAAAA");
			display_calcul(values[values.length - 1]);
			parse_values(values);
		} 
		else
		{
			if (values[0] == undefined)
			{
				operator = '';
				for(let i = 0; i < sum.toString().length; i++) {
					values.push(sum.toString()[i])
				}
			}
			else
				values.pop();
			document.querySelector("#calcul").innerHTML = document.querySelector("#calcul").innerHTML.slice(0, -1);
		}
	}
	buttons.forEach(b => {
		b.addEventListener('click', getInput);
	})
}
catch (error) {
	throw new Error(error);
}
