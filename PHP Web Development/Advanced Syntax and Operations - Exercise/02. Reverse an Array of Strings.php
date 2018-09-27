<?php

$input = explode(' ',readline());


for($i=0; $i < count($input)/2; $i++){
    $current = $input[$i];

    $input[$i] = $input[count($input) - 1 - $i];
    $input[count($input) - 1 - $i] = $current;
}

echo implode(' ', $input);