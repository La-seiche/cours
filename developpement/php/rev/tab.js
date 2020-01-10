var tab1 = ["a", "b", "c", "d"];
var tab2 = ["e", "f", "g", "h"];
var tabGlobal = [
        ["a", "b", "c", "d"],
        ["e", "f", "g", "h"]
    ];

console.log(tab1[2]);

console.log(tabGlobal[0][3])


for(var i = 0; i< tabGlobal.length; i++)
{
    for(var j = 0; j< tabGlobal[i].length ; j++)
    {
        console.log(tabGlobal[i][j])
    }
}

tabGlobal.forEach(function(value){
    value.forEach(function(value2){
        console.log(value2);
    })
})

var a = true;
var b = false;


var z = false

a && (b || z && a)
true && (false || true && true)
true && (false || true)
true && (true)
true

true && (false ||false && true)
true && (false || false)
true && (false )
false