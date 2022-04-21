const validateButton = document.querySelector("#validateButton");
const favoriteButton = document.querySelector("#saveFavorite");
const ul = document.querySelector("#listFavorite");

let favorite = [];
let city;

(() => {
    let tmp = localStorage.getItem("fav") 
    if (tmp)
    {
        favorite = JSON.parse(tmp)
    }
})()

function launchQuery() {
    const url = new URL("https://api.weatherbit.io/v2.0/forecast/daily?key=1168561e15ab488e8915043a707022aa");
    searchParams = url.searchParams
    let input = document.getElementById("searchBox").value;
    let inputType = document.getElementById("inputType").value;
    searchParams.append(inputType, input);
    fetch(url)
        .then((response) => {
            if (response.status === 200)
                response.json().then((response) => {
                    city = response.city_name;
                    displayWeather(response)
                });
            else
                alert("Unrecognized input !");
        })
}

function displayWeather(weatherContent) {
    localStorage.setItem('actualCity', weatherContent.city_name);
    document.querySelector("#tmp_act").innerHTML = 'Temperature actuelle : ' + weatherContent.data[0].temp;
    document.querySelector("#tmp_min").innerHTML = 'Temperature minimal : ' + weatherContent.data[0].min_temp;
    document.querySelector("#tmp_max").innerHTML = 'Temperature maximal : ' + weatherContent.data[0].max_temp;
}

function saveAsFavorite() {
    if (city)
    {
        if (favorite.some(el => el === city))
            alert("City is already in favorite !");
        else
        {
            favorite.push(city);
            localStorage.setItem('fav', JSON.stringify(favorite));
            let li = document.createElement("li");
            li.textContent = 'toot';
            ul.appendChild(li); 
        }
    }
}

validateButton.addEventListener('click', launchQuery);
favoriteButton.addEventListener('click', saveAsFavorite);