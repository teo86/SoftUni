<?php

$input = readline();

if(strlen($input)>=20){
    echo substr($input,0,20);
} else {
    $difference = 20 - strlen($input);
    for($i=0; $i<$difference; $i++){
        $input .= '*';
    }
    echo $input;
}