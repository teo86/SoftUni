<?php

$date = readline();
$month = date('m', strtotime("$date 1 2018"));
$lastDay =  intval(date("t", strtotime("$date 1 2018")));

for($i=1; $i<=$lastDay; $i++){
    $current = "$date $i 2018";
    if(date('D',strtotime($current)) === 'Sun'){
        $day = date('j',strtotime($current));
        echo "{$day}rd $month, 2018\n";
    }
}
