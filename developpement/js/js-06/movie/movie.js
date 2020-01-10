"use strict";

var result;
const API_KEY = '94576191df8d2b9a19933940a0a03707';

// Afficher la liste des producteurs ainsi qu'un lien vers leurs sites
function displayCompanyWebsite(response) {
  // console.log(response);
  $(".details-list ul").append("<li><a href='"+response.homepage+"'>"+response.name+"</a></li>");
}

// Afficher les infos sur le film sélectionné et rechercher les infos sur les producteurs
function displayMovieDetails(response) {
  // console.log(response);
  $(".movie-details").empty();
  $('.movie-details').append("<div class='details-list'></div>");
  // console.log(response.original_title);
  // console.log(response.poster_path);
  // console.log(response.release_date);
  // console.log(response.overview);
  // console.log(response.vote_average);
  $(".details-list").append("<p>"+response.original_title+"</p>");
  $(".details-list").append("<img src='https:image.tmdb.org/t/p/w185_and_h278_bestv2"+response.poster_path+"'/>");
  $(".details-list").append("<p>"+response.release_date+"</p>");
  $(".details-list").append("<p>"+response.overview+"</p>");
  $(".details-list").append("<p>"+response.vote_average+"</p>");
  $(".details-list").append("<p>Companies</p>");
  $(".details-list").append("<ul></ul>");
  for (var i = 0; i < response.production_companies.length; i++) {
    // console.log(response.production_companies[i].id);
    $.getJSON("https://api.themoviedb.org/3/company/"+response.production_companies[i].id+"?api_key="+API_KEY, displayCompanyWebsite);
  }
}

// Obtenir l'id du film et rechercher les infos sur le film cliqué
function getMovieID() {
  var idMovieSearch = $(this).data("id");
  // console.log(idMovieSearch);
  $.getJSON('https://api.themoviedb.org/3/movie/'+idMovieSearch+'?api_key='+API_KEY, displayMovieDetails);
}

// Afficher la liste de films
function searchMovie(response) {
  // console.log(response);
  $('.result').empty();
  $('.result').append("<div class='results-list'><ul></ul></div>");
  // console.log(response.results[0]);
  for (var i = 0; i < response.results.length; i++) {
    $('.results-list ul').append("<li data-id="+response.results[i].id+" class='results-item'>"+response.results[i].title+"</li>");
  }
}

// Obtenir valeur de la recherche et rechercher les films correspondants
function getSearchValue(e) {
  e.preventDefault();
  result = $('#movie-search').val();
  // console.log(result);
  $.getJSON('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+result, searchMovie);
}


// Au clic, récupérer la valeur de la recherche
$('#search').on('click', getSearchValue);

// Rajouter un évenement au clic sur un éléments de la liste de films
$(document).on("click", ".results-item", getMovieID);
