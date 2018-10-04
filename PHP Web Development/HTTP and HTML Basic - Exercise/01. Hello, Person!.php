<?php
if(isset($_REQUEST['person'])){
    echo "Hello,".htmlspecialchars($_REQUEST['person']).'!';
}else {
?>
<form>
    Name: <input type="text" name="person" />
    <input type="submit" />
</form>
<?php
}
?>

