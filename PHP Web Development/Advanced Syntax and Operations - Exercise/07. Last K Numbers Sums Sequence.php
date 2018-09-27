<?php

$n = intval(readline());
$k = intval(readline());

$result = [1];

for($i=1; $i<$n; $i++){
    $sum = 0;
    for($j=$i-1; $j>=max(0,($i-$k)); $j--){
        $sum += $result[$j];
    }
    array_push($result,$sum);
}
echo implode(' ',$result);