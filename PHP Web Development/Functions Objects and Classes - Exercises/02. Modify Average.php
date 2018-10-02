<?php

function calculateAverage(string $num):float {

    $sum = 0;
    for($i=0; $i<strlen($num); $i++){
        $sum += floatval($num[$i]);
    }
    $num = $sum/strlen($num);

    return $num;
}

$input = readline();

while (calculateAverage($input)<5){
    $input = $input.'9';
}
echo $input;



