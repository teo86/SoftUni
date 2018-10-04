<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sum Two Numbers</title>
</head>
<body>
<?php
if (isset($_REQUEST['num1']) && isset($_REQUEST['num2'])){
    $result = floatval(htmlspecialchars($_REQUEST['num1'])) + floatval(htmlspecialchars($_REQUEST['num2']));
    echo htmlspecialchars($_REQUEST['num1']).' + '.htmlspecialchars($_REQUEST['num2']).' = '.$result;
}
?>
<form>
    <div>First Number:</div>
    <input type="number" name="num1" />
    <div>Second Number:</div>
    <input type="number" name="num2" />
    <div><input type="submit" /></div>
</form>

</body>
</html>