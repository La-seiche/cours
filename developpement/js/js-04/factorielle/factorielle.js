var choix = parseInt(window.prompt("Choisissez un nombre"));

function fact(n){
  var result = n;
  for (var i = n; i > 0; i--){
    result = result*i;
  }
  return result;
}

choix = fact(choix);

document.write(choix);
