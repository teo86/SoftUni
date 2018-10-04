<form>
    Name:
    <input type="text" name="name"><br>
    Age:
    <input type="text" name="age"><br>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    <input type="submit" name="input" value="Submit" required>
</form>
<?php
if(isset($_REQUEST['name']) && isset($_REQUEST['age']) && isset($_REQUEST['gender'])){
    $name = htmlspecialchars($_REQUEST['name']);
    $age = htmlspecialchars($_REQUEST['age']);
    $gender = $_REQUEST['gender'];
    echo "My name is $name. I am $age years old. I am $gender.";
}