<?php


$users = [];

$input = explode(' -> ',readline());

while ($input[0]!=='login'){
    $users[$input[0]] = $input[1];
    $input = explode(' -> ',readline());
}
$attempts = 0;
$input = explode(' -> ',readline());
while ($input[0]!== 'end'){
    if(!array_key_exists($input[0],$users) || $users[$input[0]]!==$input[1]){
        echo $input[0].": login failed".PHP_EOL;
        $attempts++;
    } else {
        echo $input[0].": logged in successfully".PHP_EOL;
    }
    $input = explode(' -> ',readline());
}
echo "unsuccessful login attempts: $attempts";