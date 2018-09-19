<?php

$input = readline();
$nums = '';
$letters = '';
$others = '';

for ($i=0; $i< strlen($input); $i++){
    if(is_numeric($input[$i])){
        $nums .= $input[$i];
    } else if(ctype_alpha($input[$i])){
        $letters .= $input[$i];
    } else {
        $others .= $input[$i];
    }
}
echo "$nums\n$letters\n$others";