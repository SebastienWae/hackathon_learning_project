let input;
let btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener('click', getSearch);

function getSearch(e) {
    input = document.getElementById('search').value;
    console.log("tets", input);
}
