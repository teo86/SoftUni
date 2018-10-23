<?php

class Box {
    private $length;
    private $width;
    private $height;


    public function __construct($length, $width, $height)
    {
        $this->length = $length;
        $this->width = $width;
        $this->height = $height;
    }

    function getSurfaceArea(){
        $result = ((2 *$this->length * $this->width) + (2 * $this->length * $this->height) + (2 * $this->width * $this->height));
        return number_format($result,2,'.','');
    }

    function getLateralArea(){
        $result = ((2 * $this->length * $this->height) + (2 * $this->width * $this->height));
        return number_format($result,2,'.','');
    }

    function getVolume(){
        $result = ($this->length * $this->width * $this->height);
        return number_format($result,2,'.','');
    }


}

$length = floatval(readline());
$width = floatval(readline());
$height = floatval(readline());

$box = new Box($length,$width,$height);

echo "Surface Area - ".$box->getSurfaceArea().PHP_EOL;
echo "Lateral Surface Area - ".$box->getLateralArea().PHP_EOL;
echo "Volume - ".$box->getVolume().PHP_EOL;