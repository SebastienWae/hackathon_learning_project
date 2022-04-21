let APIKey = '1168561e15ab488e8915043a707022aa';
let city;
let btnSearch = document.getElementById("btnSearch");
let btnAddFavoris = document.getElementById("btnAddFavori");
let btnFavori = document.querySelector(".favoris");
let content = document.getElementById("displayContent");
let btnAsides = document.querySelector('aside');
btnSearch.addEventListener('click', getSearch);
let data;

function addFavori() {
    if (data) {
        console.log("storage avant: ", localStorage);
        console.log("response : ", data);

        localStorage.setItem(localStorage.length + 1, data.city_name);
        displayFavori();
        console.log("storage apres: ", localStorage);
    }
    else {
        console.log("Impossible de rajouter le favoris")
    }
}

function displayContent(res){
    console.log("res : ", res);

    content.innerHTML = `
        <div class="article">
            <p>${res.city_name}</p>
            <p>La temperature est de : ${res.data[0].temp}</p>
        </div>
        `
}

function displayFavori() {
    btnFavori.innerHTML += `
    <button class="btnFavori">
        ${localStorage[localStorage.length]}
    </button>
    `
}

function displayFavoris(){
    console.log("longeur localstorage : ", localStorage.length);
    for(let i = 1; i <= localStorage.length; i++)
    {
        btnFavori.innerHTML += `
        <button class="btnFavori">
            ${localStorage[i]}
        </button>
        `
    }
}

function getSearch(e) {
    console.log("teeeeeeeeeees ", e.target.innerHTML);
    if (e.target.innerHTML == 'OK') {
        city = document.getElementById('search').value;
    } else {
        city = e.target.innerHTML;
    }

    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city + '&key=' + APIKey)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            if (res.status == 200) {
                return res.json();
            }
            else {
                console.log("Ville non toruve");
            }
        })
        .then((response) => {
            displayContent(response);
            data = response;
        });
}


function check_favoris() {
    displayFavoris();
}

check_favoris();
btnAddFavoris.addEventListener('click', addFavori);
btnAsides.addEventListener('click', getSearch)