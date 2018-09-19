<?php

$str = readline();
$input = readline();

$letter = $input[0];
$num = intval(substr($input, 2));
$count = 0;
$offset = 0;

while (strpos($str, $letter, $offset)!== false){
    $offset = strpos($str, $letter, $offset) + 1;
    $count++;
    if($count===$num){
        echo $offset-1;
        return;
    }
}
echo "Find the letter yourself!";