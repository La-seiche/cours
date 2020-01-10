const API_KEY = '94576191df8d2b9a19933940a0a03707';

function getApiMD(response) {
    console.log(response);
    $('main').html(response.title);
}

function searchMovie(response){
    console.log(response);
}

$.getJSON('https://api.themoviedb.org/3/movie/550?api_key='+API_KEY, getApiMD);


$.getJSON('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query=1830', searchMovie);
