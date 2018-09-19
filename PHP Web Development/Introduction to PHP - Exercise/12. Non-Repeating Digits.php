<?php

$num = intval(readline());
$result = [];

if($num<102){
    echo 'no';
    return;
}
for($i=102; $i<= min($num,987); $i++){
    $str = strval($i);
    if ($str[0] !== $str[1] && $str[0] !== $str[2] && $str[1] !== $str[2]){
        array_push($result, $i);
    }
}
echo join(', ', $result);