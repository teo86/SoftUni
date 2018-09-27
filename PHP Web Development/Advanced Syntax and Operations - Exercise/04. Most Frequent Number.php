<?php

$input = explode(' ', readline());

$result = [];

for ($i=0; $i< count($input); $i++){
    if(!array_key_exists($input[$i],$result)){
        $result[$input[$i]] = 0;
    }
    $result[$input[$i]]++;
}
arsort($result);
echo array_keys($result)[0];