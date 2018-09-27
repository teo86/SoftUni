<?php

$products = [];

$input = explode(' ',readline());

while ($input[0]!=='shopping'){
    if(!array_key_exists($input[1],$products)){
        $products[$input[1]] = 0;
    }
    $products[$input[1]] += intval($input[2]);
    $input = explode(' ',readline());
}
$input = explode(' ',readline());
while ($input[0]!=='exam'){
    if(!array_key_exists($input[1],$products)){
        echo "$input[1] doesn't exist".PHP_EOL;
    } else {
        if($products[$input[1]]>0) {
            $products[$input[1]] -= intval($input[2]);
        } else {
            echo $input[1]." out of stock".PHP_EOL;
        }
    }
    $input = explode(' ',readline());
}

foreach ($products as $prod => $quant) {
    if($quant>0){
        echo $prod." -> ".$quant.PHP_EOL;
    }
}