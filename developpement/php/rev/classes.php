<?php

// on ne pourra pas intensier cette classe
abstract class A
{

    // pour pouvoir hériter les propriétés il faut les mettre en protected
    protected $id;
    // le fait de protéger nos propriétés on l'appelle ENCAPSULATION
    protected $nom;

    // on oblige toutes les classe filles d'implimenter la méthode marcher
    // avec une méthode abstraite on est obligé de mettre la classe en abstract
    public abstract function marcher();

    public function afficherNom()
    {
        echo $this->nom;
    }

    
    public function getNom()
    {
        return $this->nom;
    }

    public function setNom($nom)
    {
        $this->nom = $nom;
    }

}

class B extends A
{
    private $prenom;

    // Redéfinition de la fonction
    public function afficherNom()
    {
        echo $this->prenom." ".$this->nom;
    }

    public function marcher() 
    {
        echo $this->nom." est entrain de marcher";
    }
}


$a = new B();
 