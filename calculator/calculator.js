const buttons = document.querySelectorAll("button");               
                
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let j = buttons[i].innerHTML;
        console.log(j);    
        document.querySelector(".resultat").innerHTML += `${j}`;                    
    });
}  

