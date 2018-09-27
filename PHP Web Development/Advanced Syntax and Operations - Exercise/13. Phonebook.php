<?php

$command = explode(' ',readline());
$phoneBook = [];

while($command[0] !== 'END'){

    if($command[0]=== 'A'){
        $phoneBook[$command[1]] = $command[2];
    } else if($command[0]==='S'){
        if(array_key_exists($command[1],$phoneBook)){
            echo $command[1]." -> ".$phoneBook[$command[1]].PHP_EOL;
        } else {
            echo "Contact $command[1] does not exist.".PHP_EOL;
        }
    }
    $command = explode(' ',readline());
}