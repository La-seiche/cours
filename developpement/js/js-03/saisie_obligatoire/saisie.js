var choix

do {
  choix = parseFloat(window.prompt("Veuillez saisir un nombre"));
}
while (isNaN(choix) == true)

document.write(choix);
