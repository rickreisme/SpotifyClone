const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

// CONSUMINDO A API
function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}` 
    //retornando somente os artistas que tem nome parecido com o que está sendo digitado no input
    fetch(url)
        .then((response) => response.json())//retornando a resposta da consulta em json na variavel response
        .then((result) => displayResults(result))//passando o resultado das respostas em json para a função displayResults
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', inputSearch);

function inputSearch(){
    const searchTerm = searchInput.value.toLowerCase();
    if(!searchTerm){
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm)
}