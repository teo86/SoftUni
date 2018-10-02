<?php

class Person{
    public $name;
    public $age;


    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

}

$persons = [];
$count = intval(readline());

for($i=0; $i<$count; $i++){
    list($name,$age) = explode(' ',readline());
    if(intval($age)>30){
        $person = new Person($name,$age);
        array_push($persons,$person);
    }
}
usort($persons,function ($a,$b){
   return $a->name <=> $b->name;
});
foreach ($persons as $per) {
    echo $per->name.' - '.$per->age.PHP_EOL;
}