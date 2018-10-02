<?php

class Employee{
    public $name;
    public $salary;
    public $position;
    public $department;
    public $email = 'n/a';
    public $age = '-1';

    public function __construct($name, $salary, $position, $department)
    {
        $this->name = $name;
        $this->salary = $salary;
        $this->position = $position;
        $this->department = $department;
    }

}

$n = intval(readline());
$employees = [];

for ($i=0; $i<$n; $i++){
    $empInfo = explode(' ',readline());
    $name = array_shift($empInfo);
    $salary = floatval(array_shift($empInfo));
    $position = array_shift($empInfo);
    $department = array_shift($empInfo);

    $employee = new Employee($name,$salary,$position,$department);

    if(count($empInfo)===2){
        $employee->email = $empInfo[0];
        $employee->age = $empInfo[1];
    } else if(count($empInfo)===1){
        if(preg_match('/^[0-9]+$/',$empInfo[0])){
            $employee->age = $empInfo[0];
        } else {
            $employee->email = $empInfo[0];
        }
    }

    array_push($employees,$employee);
}
usort($employees,function ($a,$b){
   return $b->salary <=> $a->salary;
});
$averageSalary =0;
$bestDepartment ='';
$checked =[];

foreach ($employees as $emp) {
    if(!in_array($emp->department,$checked)){
        array_push($checked,$emp->department);
        $curDep = $emp->department;
        $curSalary = 0;
        $count =0;
        foreach ($employees as $e) {
            if($e->department ===$curDep){
                $curSalary += $e->salary;
                $count++;
            }
        }
        if($averageSalary<$curSalary/$count){
            $averageSalary = $curSalary/$count;
            $bestDepartment = $curDep;
        }
    }

}

echo "Highest Average Salary: $bestDepartment".PHP_EOL;
foreach ($employees as $employee) {
    if($employee->department === $bestDepartment){
        echo $employee->name.' '
            .number_format($employee->salary,2,'.','')
            .' '.$employee->email.' '.$employee->age.PHP_EOL;
    }
}