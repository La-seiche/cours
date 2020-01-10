'use strict';

function sayHello()
{
    document.write('<p>Bonjour à toutes et à tous !</p>');
}

sayHello();

sayHello();

sayHello();

function sayHelloOne(name){
    document.write("Je m'appelle : "+name);
}

sayHelloOne('Thib');

sayHelloOne('Dédé');

function sayHelloOne(name, age, job){
    document.write("Je m'appelle : "+name+ "j'ai : "+age+" ans je suis : "+job);
}

sayHelloOne('Thib', 29, "dev");

sayHelloOne('Dédé', 54, "pilier de bar");
