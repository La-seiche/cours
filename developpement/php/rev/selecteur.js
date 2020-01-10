document.getElementById("test")  //1 élément récupéré $("#test")
 

<ul class="test1">
    <li></li>
    <li></li>
    <li></li>
    <li></li>

</ul>

<ul class="test2" >
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    
</ul>


document.querySelectorAll("ul.test2 li") //>>>>  retour est un array $("ul.test2 li")
$("ol.test2 li") //>>>> le retour est null


document.getElementsByTagName("ul").getElementsByClassName("test2").getElementsByTagName('li');



// l'ajax il envoie une requête HTTP au serveur en utilisant (passant par) le protocole XMLHttpRequest

