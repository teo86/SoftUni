<?php

$num = intval(readline());
$multiplier = intval(readline());

if($multiplier>10){
    $sum = $num * $multiplier;
    echo "$num X $multiplier = $sum";
} else{
    for($i=$multiplier; $i<=10; $i++){
        $sum = $num * $i;
        echo "$num X $i = $sum\n";
    }
}
