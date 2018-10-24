<?php

interface Person{

    function setName($name);

    function setAge($age);
}

interface Identifiable{

    function setId($id);

}

interface Birthable{

    function setBirthdate($date);
}
class Citizen implements Person{
    private $name;
    private $age;
    private $id;
    private $birthdate;


    public function __construct($name, $age, $id, $date)
    {
        $this->setName($name);
        $this->setAge($age);
        $this->setId($id);
        $this->setBirthdate($date);
    }

    function setName($name)
    {
        $this->name =$name;
    }

    function setAge($age)
    {
        $this->age = $age;
    }

    public function setId($id): void
    {
        $this->id = $id;
    }


    public function setBirthdate($birthdate): void
    {
        $this->birthdate = $birthdate;
    }

    function __toString()
    {
        return $this->name.PHP_EOL.$this->age.PHP_EOL.$this->id.PHP_EOL.$this->birthdate;
    }
}

$name = readline();
$age = readline();
$id= readline();
$date = readline();

$s = new Citizen($name,$age,$id,$date);
echo $s->__toString();
