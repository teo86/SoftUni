<?php

$firstNum = intval(readline());
$secondNum = intval(readline());

for ($i = min($firstNum,$secondNum); $i<= max($firstNum,$secondNum); $i++){
    echo $i . "\n";
}