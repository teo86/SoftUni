<?php

list($rows,$cols) = array_map('intval', explode(', ',readline()));
$matrix = [];

for ($i=0; $i<$rows; $i++){
    $elements = array_map('intval', explode(', ', readline()));
    array_push($matrix,$elements);
}
//$rows=3; $cols=6;
//
//$matrix= [
//    [7, 1, 3, 3, 2, 1],
//    [1, 3, 9, 8, 5, 6],
//    [4, 6, 7, 9, 1, 0]
//];


$sumMax = 0;
$subMat = '';

for($i=0; $i<$rows-1; $i++){
    for($j=0; $j<$cols-1; $j++){
        list($subMat,$sumMax) = findMaxSubMatrix($i,$j,$matrix,$sumMax,$subMat);
    }
}

foreach ($subMat as $row){
    echo implode(' ', $row).PHP_EOL;
}
echo $sumMax;

function findMaxSubMatrix($r,$c,$m,$s,$sm){
    $tmpMat = [[$m[$r][$c], $m[$r][$c+1]], [$m[$r+1][$c], $m[$r+1][$c+1]]];
    $tmpSum =  $m[$r][$c] + $m[$r][$c+1] + $m[$r+1][$c] + $m[$r+1][$c+1];

    if($s<$tmpSum){
        return [$tmpMat,$tmpSum];
    } else {
        return [$sm,$s];
    }
}
