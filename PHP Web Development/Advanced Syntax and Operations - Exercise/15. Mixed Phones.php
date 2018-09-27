<?php

$phoneBook = [];
$pattern = '/^[0-9]+$/';

$input = explode(' : ', readline());

while($input[0]!=='Over'){

    if(preg_match($pattern,$input[0])){
        $phoneBook[$input[1]] = $input[0];
    } else {
        $phoneBook[$input[0]] = $input[1];
    }

    $input = explode(' : ', readline());
}

ksort($phoneBook);
foreach ($phoneBook as $name => $phone) {
    echo $name." -> ".$phone.PHP_EOL;
}