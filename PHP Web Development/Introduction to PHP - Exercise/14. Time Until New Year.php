<?php

$input = readline();

$today = mktime(intval(substr($input,11,2)),
    intval(substr($input,14,2)),intval(substr($input,17,2)),
    intval(substr($input,3,2)),intval(substr($input,0,2)),
    intval(substr($input,6,4)));


$newYear = mktime(0, 0, 0, 1, 1, intval(substr($input,6,4)) + 1);
$diff = $newYear - $today;
if(date("I", $today) > 0) {
    $diff -= 3600;
}
echo "Hours until new year : " . floor($diff / 3600) . "\n";
echo "Minutes until new year : " . floor($diff / 60) . "\n";
echo "Seconds until new year : $diff\n";
echo "Days:Hours:Minutes:Seconds " . floor($diff / 86400) . ":" .floor(($diff%86400)/3600). ":" .  date("i:s", $diff);