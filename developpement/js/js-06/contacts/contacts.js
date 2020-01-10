"use strict";

var civility;
var firstName;
var lastName;
var phoneNumber;
var contactTable = [];
var idContact;

function addInformations() {
  $(".informations-list").removeClass("hide");
  idContact = -1;
}

function displayContacts() {
  var recupJson = window.localStorage.getItem('contacts');
  contactTable = JSON.parse(recupJson);
  // console.log(newContactTable);
  $(".contacts-list ul").empty();
  if (contactTable === null){
    contactTable = [];
  } else {
    for (var i = 0; i < contactTable.length; i++) {
        $('.contacts-list ul').append("<li data-id="+i+" class='results-item'>"+contactTable[i].prenom+" "+contactTable[i].nom+"</li>");
    }
  }

}

function editContact() {
  $(".informations-list").removeClass("hide");
  // console.log(contactTable);
  // console.log(idContact);
  // console.log(contactTable[idContact].civ);
  // console.log(contactTable[idContact].prenom);
  // console.log(contactTable[idContact].nom);
  // console.log(contactTable[idContact].tel);
  $(".details").addClass("hide");
  //displayContacts();
}

function openContact() {
  idContact = $(this).data("id");
  $(".details").empty();
  // console.log(idContact);
  // console.log(contactTable[idContact].prenom);
  var civility;
  switch (contactTable[idContact].civ) {
    case "madame":
    civility = "Mme";
    break;
    case "mademoiselle":
    civility = "Mlle";
    break;
    case "monsieur":
    civility = "M";
    break;
  }
  $(".details").append("<p>"+civility+". "+contactTable[idContact].prenom+" "+contactTable[idContact].nom+"</p>");
  $(".details").append("<p>"+contactTable[idContact].tel+"</p>");
  $(".details").append("<a class='edit' href='#'>Editer ce contact</a>")
  $(".details").on("click", editContact);
  $(".details").toggleClass("hide");
}

function recupInformations() {
  civility = $('#civility').val();
  firstName = $("#firstName").val();
  lastName = $("#lastName").val();
  phoneNumber = $("#telephone").val();
}

function addContact(e) {
  e.preventDefault();
  recupInformations();
  if (idContact == -1) {
    var contactInformations = {
      civ : civility,
      nom : lastName,
      prenom : firstName,
      tel : phoneNumber
    };
    var recupJson = window.localStorage.getItem('contacts');
    var newContactTable = JSON.parse(recupJson);
    // console.log(newContactTable);
    if (newContactTable != null){
      contactTable = newContactTable;
    }

  }
  else {
    // console.log(civility);
    contactTable[idContact].civility = civility;
    contactTable[idContact].prenom = firstName;
    contactTable[idContact].nom = lastName;
    contactTable[idContact].tel = phoneNumber;
    // console.log(contactTable[idContact].civility);
  }

  contactTable.push(contactInformations);
  var jsonContactTable = JSON.stringify(contactTable);
  window.localStorage.setItem("contacts", jsonContactTable);
  $(".informations-list").addClass("hide");
  displayContacts();
}

function deleteAll() {
  var recupJson = window.localStorage.getItem('contacts');
  contactTable = JSON.parse(recupJson);
  contactTable = [];
  // console.log(contactTable);
  var jsonContactTable = JSON.stringify(contactTable);
  window.localStorage.setItem("contacts", jsonContactTable);
  displayContacts();
}

displayContacts();
$('#add').on('click', addInformations);
$("#save").on("click", addContact);
$(document).on("click", ".results-item", openContact);
$("#deleteAll").on("click", deleteAll);
