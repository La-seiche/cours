var x1 = parseInt(window.prompt('choisir x1'));
var y1 = parseInt(window.prompt('choisir y1'));
var x2 = parseInt(window.prompt('choisir x2'));
var y2 = parseInt(window.prompt('choisir y2'));

function milieu(x1, y1, x2, y2){
  var coord = {x:(x1+x2)/2, y:(y1 + y2)/2};
  return coord;
  }

  var mi = milieu(x1, y1, x2, y2);
  document.write (mi.x , mi.y)
