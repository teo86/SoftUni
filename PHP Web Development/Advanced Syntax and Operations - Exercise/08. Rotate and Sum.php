<?php

$arr = explode(' ', readline());
$n = intval(readline());
$result = [];
for($i=0; $i<count($arr); $i++){
    array_push($result,0);
}

while($n!==0){
    $num = array_pop($arr);
    array_unshift($arr,$num);
    for($i=0; $i<count($arr); $i++){
        $result[$i]+=$arr[$i];
    }
    $n--;
}
echo implode(' ', $result);