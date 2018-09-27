<?php

$chars = strtolower(readline());

for($i=0; $i<strlen($chars); $i++){
    echo "$chars[$i] -> ".(ord($chars[$i]) - 97).PHP_EOL;
}