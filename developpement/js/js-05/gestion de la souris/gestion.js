var button = document.getElementById("toggle-rectangle");

var rectangle = document.querySelector('.rectangle');

function magicButton(){
  rectangle.classList.toggle('rectangle');
}

function clicClac(){
  rectangle.classList.remove("important");
  rectangle.classList.toggle('rectangle');
  rectangle.classList.toggle("good");
}

function abracadabra(){
  rectangle.classList.toggle('rectangle');
  rectangle.classList.toggle('important');
}

function back(){
  rectangle.classList.remove('important');
  rectangle.classList.add('rectangle');
  rectangle.classList.remove("good");
}

button.addEventListener('click', magicButton);

rectangle.addEventListener("dblclick", clicClac);

rectangle.addEventListener("mouseover", abracadabra);

rectangle.addEventListener("mouseout", back);
