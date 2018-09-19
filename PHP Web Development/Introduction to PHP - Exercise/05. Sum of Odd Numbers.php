<?php

$num = 1;
$sum = 0;

$input = intval(readline());

for($i=0; $i<$input; $i++){
    echo $num . "\n";
    $sum+=$num;
    $num+=2;
}
echo "Sum: $sum";