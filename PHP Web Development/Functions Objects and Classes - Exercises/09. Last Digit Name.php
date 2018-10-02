<?php

class Number {
    public $number;

    public function __construct($number)
    {
        $this->number = $number;
    }
    function printNameOfLastDigit($num){
        $num = strval($num);
        $last = $num[strlen($num)-1];

        switch ($last){
            case '1':
                echo 'one';
                break;
            case '2':
                echo 'two';
                break;
            case '3':
                echo 'three';
                break;
            case '4':
                echo 'four';
                break;
            case '5':
                echo 'five';
                break;
            case '6':
                echo 'six';
                break;
            case '7':
                echo 'seven';
                break;
            case '8':
                echo 'eight';
                break;
            case '9':
                echo 'nine';
                break;
            case '0':
                echo 'zero';
                break;
        }
    }
}
$input = new Number(intval(readline()));
$input->printNameOfLastDigit($input->number);