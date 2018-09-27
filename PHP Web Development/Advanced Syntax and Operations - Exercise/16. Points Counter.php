<?php

$teams =[];

$input = explode('|', readline());

while($input[0]!=='Result'){

    $replace = ['@','%','&','$','*'];
    $input[0] = str_replace($replace,'',$input[0]);
    $input[1] = str_replace($replace,'',$input[1]);

    if(preg_match('/^[A-Z]+$/',$input[0])){
        $teamName = $input[0];
        $player = $input[1];
        $points = intval($input[2]);
    } else {
        $teamName = $input[1];
        $player = $input[0];
        $points = intval($input[2]);
    }

    if(!array_key_exists($teamName,$teams)){
        $teams[$teamName] = ['total'=> 0];
    }
    if(!array_key_exists($player,$teams[$teamName])){
        $teams[$teamName][$player] = 0;
    } else {
        $teams[$teamName]['total'] -= $teams[$teamName][$player];
    }
    $teams[$teamName][$player] = $points;
    $teams[$teamName]['total'] += $points;


    $input = explode('|', readline());
}
function sortByTotal($a, $b){
    return $b['total'] <=> $a['total'];
}

uasort($teams,'sortByTotal');

foreach ($teams as $team => $player) {
    echo "$team => {$player['total']}".PHP_EOL;
    arsort($player);
    echo "Most points scored by ".array_keys($player)[1].PHP_EOL;
}