<?php

interface Car{
    function useBrakes();
    function gasPedal();
    function setDriver($name);
}

class Ferrari implements Car{

    private $model = "488-Spider";
    private $driver;

    /**
     * @return string
     */
    public function getModel(): string
    {
        return $this->model;
    }

    /**
     * @return mixed
     */
    public function getDriver()
    {
        return $this->driver;
    }


    public function __construct($driver)
    {
        $this->setDriver($driver);
    }


    function useBrakes()
    {
        echo "Brakes!";
    }

    function gasPedal()
    {
        echo "Zadu6avam sA!";
    }



    function setDriver($name)
    {
        $this->driver = $name;
    }


}

$name =readline();

$f = new Ferrari($name);

echo $f->getModel().'/';
echo $f->useBrakes().'/';
echo $f->gasPedal().'/';
echo $f->getDriver();
