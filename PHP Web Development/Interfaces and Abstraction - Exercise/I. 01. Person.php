<?php

interface Person{

    function setName($name);

    function setAge($age);
}

class Citizen implements Person{
    private $name;
    private $age;


    public function __construct($name, $age)
    {
        $this->setName($name);
        $this->setAge($age);
    }

    function setName($name)
    {
        $this->name =$name;
    }

    function setAge($age)
    {
        $this->age = $age;
    }

    function __toString()
    {
        return $this->name.PHP_EOL.$this->age;
    }
}

$name = readline();
$age = readline();

$s = new Citizen($name,$age);
echo $s->__toString();
