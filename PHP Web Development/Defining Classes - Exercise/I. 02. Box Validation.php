<?php

class Box {
    private $length;
    private $width;
    private $height;


    public function __construct($length, $width, $height)
    {
        $this->setLength($length);
        $this->setWidth($width);
        $this->setHeight($height);
    }

    /**
     * @param mixed $length
     */
    private function setLength($length): void
    {
        if($length<=0){
            throw new Exception('Length cannot be zero or negative.');
        }
        $this->length = $length;
    }

    /**
     * @param mixed $width
     */
    private function setWidth($width): void
    {
        if($width<=0){
            throw new Exception('Width cannot be zero or negative.');
        }
        $this->width = $width;
    }

    /**
     * @param mixed $height
     */
    private function setHeight($height): void
    {
        if($height<=0){
            throw new Exception('Height cannot be zero or negative.');
        }
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

try{
    $box = new Box($length,$width,$height);
    echo "Surface Area - ".$box->getSurfaceArea().PHP_EOL;
    echo "Lateral Surface Area - ".$box->getLateralArea().PHP_EOL;
    echo "Volume - ".$box->getVolume().PHP_EOL;
} catch (Exception $e){
    echo $e->getMessage();
}
