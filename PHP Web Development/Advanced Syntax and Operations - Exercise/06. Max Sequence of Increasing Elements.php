<?php

$input = explode(' ', readline());

$maxSeq = 1;
$curSeq = 1;
$curNum = intval($input[0]);
$index = 0;
$curInd = 0;

for($i=1; $i<count($input); $i++){
    if($curNum < intval($input[$i])){
        $curSeq++;

        if($curSeq>$maxSeq){
            $maxSeq = $curSeq;
            $index = $curInd;
        }
    } else {
        $curSeq = 1;
        $curInd = $i;
    }
    $curNum = intval($input[$i]);
}

for($i = 0; $i<  $maxSeq; $i++){
    echo $input[$index+$i].' ';
}