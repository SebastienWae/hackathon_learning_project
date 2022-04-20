const	buttons = document.querySelectorAll("button");
const	display = '';

console.log(buttons);
let int1='';
let op = 0;
let int2='';

function init(j){
	op = 0;
	int1 = '';
	int2 = '';
	j = '';
	return(j);
}

function ft_calc(int1, op, int2){
	let res;
	if (op === '+')
	{
		res = Number(int1) + Number(int2);
	}
	if (op === '-')
	{
		res = Number(int1) - Number(int2);
	}
	if (op === '/')
	{
		res = Number(int1) / Number(int2);
	}
	if (op === 'x')
	{
		res = Number(int1) * Number(int2);
	}
	console.log(int1)
	console.log(op)
	console.log(int2)
	return(String(res));
}

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {			
		let j = buttons[i].innerHTML;			
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
	});
	
} 

