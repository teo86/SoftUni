<?php

$input = array_map('intval', explode(' ', readline()));

function reduceNums($arr){
    $result = [];
    for($i=0; $i<count($arr)-1; $i++){
        array_push($result,($arr[$i]+$arr[$i+1]));
    }
    return $result;
}

while(count($input)>1){
    $input = reduceNums($input);
}
echo $input[0];