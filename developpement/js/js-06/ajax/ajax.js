"use strict";

var result="";

function displayHTML(response) {
  // console.log(response);
  $('.result').html(response);
};

function displayJSON (response) {
    console.log(response);
    $('.result').empty();
    for (var i = 0; i < response.length; i++) {
      $('.result').append('<div><p><strong>Prénom </strong>: '+response[i].prenom+'</p></div>');
      $('.result').append('<div><p>Téléphone: '+response[i].tel+'</p></div>');
    }
  };

function displayMovieList(response) {
  $('.result').html(response);
};

function getInputValue(e) {
  e.preventDefault();
  result = $("input:checked").val();
  switch (result) {
    case "html":
    $.get('ajax1.php', displayHTML);
    break;
    case "json":
    $.getJSON('ajax2.php', displayJSON);
    break;
    case "movie":
    $.get('ajax3.php', displayMovieList);
    break;
  }
};


$('#validate').on('click', getInputValue);
