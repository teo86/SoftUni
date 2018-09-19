<?php

$country = readline();

if($country === 'USA' || $country === 'England'){
    echo 'English';
} else if($country === 'Spain' || $country === 'Argentina' || $country === 'Mexico'){
    echo 'Spanish';
} else {
    echo 'unknown';
}