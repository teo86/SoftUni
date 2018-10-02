<?php

function performOperation($str,$num){
    switch ($str){
        case 'chop':
            $num = $num/2;
            break;
        case 'dice':
            $num = sqrt($num);
            break;
        case 'spice':
            $num = $num+1;
            break;
        case 'bake':
            $num = $num*3;
            break;
        case 'fillet':
            $num = $num - $num*0.2;
            break;
    }
    echo $num.PHP_EOL;
    return $num;
}
$number = floatval(readline());

$operations = explode(', ',readline());

foreach ($operations as $operation) {
    $number = performOperation($operation,$number);
}