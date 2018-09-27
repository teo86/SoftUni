<?php

list($rows,$cols) = array_map('intval', explode(', ',readline()));

$sum =0;

for ($i=0; $i<$rows; $i++){
    $elements = array_map('intval', explode(', ', readline()));
    for($j=0; $j<$cols; $j++){
        $sum += $elements[$j];
    }
}

echo $rows.PHP_EOL.$cols.PHP_EOL.$sum;