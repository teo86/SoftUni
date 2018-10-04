<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Table</title>
</head>
<body>
<form>
    Name:
    <input type="text" name="name"><br>
    Phone:
    <input type="text" name="phone"><br>
    Age:
    <input type="text" name="age"><br>
    Address:
    <input type="text" name="address"><br>
    <input type="submit" name="input" value="Generate table" required>
</form>
<?php
    if(isset($_REQUEST['name']) && isset($_REQUEST['phone'])
    && isset($_REQUEST['age']) && isset($_REQUEST['address'])){
        $name = trim(htmlspecialchars($_REQUEST['name']));
        $phone = trim(htmlspecialchars($_REQUEST['phone']));
        $age = trim(htmlspecialchars($_REQUEST['age']));
        $address = trim(htmlspecialchars($_REQUEST['address']));

        echo "<table border='2'>";
        echo "<tr><td style='background-color: orange'>Name</td><td>$name</td></tr>";
        echo "<tr><td style='background-color: orange'>Phone number</td><td>$phone</td></tr>";
        echo "<tr><td style='background-color: orange'>Age</td><td>$age</td></tr>";
        echo "<tr><td style='background-color: orange'>Address</td><td>$address</td></tr>";
        echo '</table>';

    }
?>
</body>
</html>