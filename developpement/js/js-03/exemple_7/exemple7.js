var counter = 0;


while(counter < 10){

    document.write("<p>J'ai la flemme de répéter</p>");
    counter ++; // counter = counter + 1

}

for(var counter2 = 0; counter2 < 10; counter2++ ){
        document.write("<p>J'ai encore la flemme de répéter</p>");
}

for(var counter3 = 10; counter3 > 0; counter3-- ){
    document.write("<p>J'ai toujours plus la flemme de répéter</p>");
}

var student = ['Pierre', 'Paul', 'Jacques', 'Riri', 'Fifi', 'Loulou'];

for(var index = 0; index < student.length; index ++ ){

    document.write('<ul>');
    document.write('<li>Eleve avec index : '+index+' et le nom : '+student[index]+'</li>');
    document.write('</ul>');
}

do {

    name = window.prompt('entrez un nom')

} while (name != 'Donald');

document.write('<p>Salut Donald</p>')
