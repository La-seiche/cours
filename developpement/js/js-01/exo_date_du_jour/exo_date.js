"use strict";

var weekDays = [];

weekDays[0] = "Dimanche";
weekDays[1] = "Lundi";
weekDays[2] = "Mardi";
weekDays[3] = "Mercredi";
weekDays[4] = "Jeudi";
weekDays[5] = "Vendredi";
weekDays[6] = "Samedi";

var month = [];

month[0] = "Janvier";
month[1] = "Février";
month[2] = "Mars";
month[3] = "Avril";
month[4] = "Mai";
month[5] = "Juin";
month[6] = "Juillet";
month[7] = "Août";
month[8] = "Septembre";
month[9] = "Octobre";
month[10] = "Novembre";
month[11] = "Décembre";

var date = new Date;

document.write("<p>La date du jour est : " + weekDays[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear());
