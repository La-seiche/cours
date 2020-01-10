var Studient = function(name, age, section, classe) {
    this.name = name;
    this.age = age;
    this.section = section;
    this.classe = classe;
}

Studient.prototype.etudier = function() {
    console.log("J'étudie");
}

Studient.prototype.noter = function(note) {
    console.log("vous avez eu : "+note+"/20");
}

Studient.prototype.sayMyName = function() {
    document.write("Je m'appelle : "+this.name)
}

Studient.prototype.frapper = function(Studient){
    document.write(this.name+"a frappé "+Studient.name);
}
