<?php

$firstNumber = floatval(readline());
$secondNumber = floatval(readline());

$result = number_format(($firstNumber + $secondNumber), 2, '.', '');
echo "\$firstNumber + \$secondNumber = $firstNumber + $secondNumber = $result";