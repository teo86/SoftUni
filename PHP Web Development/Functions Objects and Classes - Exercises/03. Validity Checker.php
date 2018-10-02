<?php

function distanceBetweenTwoPoints($x1,$y1,$x2,$y2){
    $distance = sqrt(pow(($x2-$x1),2) + pow(($y2 - $y1),2));
    if(intval($distance) == $distance){
        return "{"."$x1, $y1} to "."{"."$x2, $y2} is valid";
    }
    return "{"."$x1, $y1} to "."{"."$x2, $y2} is invalid";
}

list($x1,$y1,$x2,$y2) = array_map('intval', explode(', ',readline()));

echo distanceBetweenTwoPoints($x1,$y1,0,0).PHP_EOL;
echo distanceBetweenTwoPoints($x2,$y2,0,0).PHP_EOL;
echo distanceBetweenTwoPoints($x1,$y1,$x2,$y2).PHP_EOL;