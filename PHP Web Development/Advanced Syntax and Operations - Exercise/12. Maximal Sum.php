<?php

list($rows,$cols) = array_map('intval', explode(' ',readline()));
$matrix = [];

for ($i=0; $i<$rows; $i++){
    $elements = array_map('intval', explode(' ', readline()));
    array_push($matrix,$elements);
}
//$rows=5; $cols=6;
//
//$matrix= [
//    [1, 2, 4, 8, 9, 6],
//    [2, 4, 1,3,4,2],
//    [2,7,9,9,9,7],
//    [8,6,9,9,9,6],
//    [9,5,9,9,9,9]
//];


$sumMax = PHP_INT_MIN;
$subMat = '';

for($i=0; $i<$rows-2; $i++){
    for($j=0; $j<$cols-2; $j++){
        list($subMat,$sumMax) = findMaxSubMatrix($i,$j,$matrix,$sumMax,$subMat);
    }
}
echo "Sum = ".$sumMax.PHP_EOL;
for($i=0; $i<count($subMat); $i++){
    for($j=0; $j< count($subMat); $j++){
        echo $subMat[$i][$j]." ";
    }
    echo PHP_EOL;
}


function findMaxSubMatrix($r,$c,$m,$s,$sm){
    $tmpMat = [];
    $tmpSum =  0;
    for($i=$r; $i<$r+3;$i++){
        $elements = [];
        for($j=$c; $j<$c+3; $j++){
            array_push($elements,$m[$i][$j]);
            $tmpSum+=$m[$i][$j];
        }
        array_push($tmpMat,$elements);
    }

    if($s<$tmpSum){
        return [$tmpMat,$tmpSum];
    } else {
        return [$sm,$s];
    }
}