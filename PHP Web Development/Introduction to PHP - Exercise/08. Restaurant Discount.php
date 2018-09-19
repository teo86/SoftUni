<?php

$people = intval(readline());
$package = readline();

$sum = 0;

if($people<=50){
    $sum+=2500;
    echo "We can offer you the Small Hall\n";
} else if($people<=100){
    $sum+=5000;
    echo "We can offer you the Terrace\n";
} else if($people<=120){
    $sum+=7500;
    echo "We can offer you the Great Hall\n";
} else {
    echo "We do not have an appropriate hall.";
    return;
}
switch ($package){
    case 'Normal':
        $sum+=500;
        $sum = $sum - $sum*0.05;
        break;
    case 'Gold':
        $sum+=750;
        $sum = $sum - $sum*0.1;
        break;
    case 'Platinum':
        $sum+=1000;
        $sum = $sum - $sum*0.15;
        break;
}

$pricePerPerson = number_format(($sum/$people),2,'.','');

echo "The price per person is $pricePerPerson$";