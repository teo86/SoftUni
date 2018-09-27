<?php

$input = explode(' ',readline());
$sum =0;
foreach ($input as $item) {
    $item = intval(strrev($item));
    $sum +=$item;
}

echo $sum;