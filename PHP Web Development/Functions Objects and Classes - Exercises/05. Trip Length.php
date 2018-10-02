<?php

$input = array_map('floatval',explode(', ',readline()));
$point1 = ['x'=>$input[0], 'y'=>$input[1]];
$point2 = ['x'=>$input[2], 'y'=>$input[3]];
$point3 = ['x'=>$input[4], 'y'=>$input[5]];

$option1 = calculateDistance($point1,$point2,$point3);
$option2 = calculateDistance($point2,$point1,$point3);
$option3 = calculateDistance($point1,$point3,$point2);

if($option1<= $option2 && $option1<=$option3){
    echo '1->2->3: '.$option1;
} else if($option2<$option1 && $option2<=$option3){
    echo '2->1->3: '.$option2;
} else {
    echo '1->3->2: '.$option3;
}

function calculateDistance($p1,$p2,$p3){
    return sqrt(pow(($p2['x'] - $p1['x']),2) + pow(($p2['y'] - $p1['y']),2))
        + sqrt(pow(($p3['x'] - $p2['x']),2) + pow(($p3['y'] - $p2['y']),2));
}