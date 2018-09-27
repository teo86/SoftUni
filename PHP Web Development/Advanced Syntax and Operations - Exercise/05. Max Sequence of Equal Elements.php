<?php

$input = explode(' ', readline());

$maxSeq = 1;
$num = $input[0];
$curSeq = 1;
$curNum = $input[0];

for($i=1; $i<count($input); $i++){
    if($curNum == $input[$i]){
        $curSeq++;
        if($curSeq>$maxSeq){
            $maxSeq = $curSeq;
            $num = $curNum;
        }
    } else {
        $curNum = $input[$i];
        $curSeq = 1;
    }
}
$result = trim(str_repeat($num.' ', $maxSeq));
echo $result;