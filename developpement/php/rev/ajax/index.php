<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
<button id="click">Afficher</button>
<div id="affichage"></div>

<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

  <script>
  $("#click").click(function(){
        $.ajax({
            url : "json.php",
            dataType: "json"
        }).done(function(result){
            console.log(result);
            $("#affichage").html("<p>"+result.username+"</p><p>"+result.email+"</p>")
        })
  })
    
  
  </script>
</body>
</html>