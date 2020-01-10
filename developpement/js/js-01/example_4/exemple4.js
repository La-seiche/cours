var weekDays =new Array();

weekDays[0] = "Lundi";
weekDays[1] = "Mardi";
weekDays[2] = 'Mercredi';
weekDays[3] = 'Jeudi';
weekDays[4] = 'Vendredi';
weekDays[5] = 'Samedi';
weekDays[6] = 'Dimanche';

console.log(weekDays[3]);

var daySunday = 6;

document.write('et le dernier jour de la semaine est le ' + weekDays[daySunday] + '.');

document.write('Le premier jour de la semaine est le ' + weekDays[0] + ' ');

var date = new Date();

console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
