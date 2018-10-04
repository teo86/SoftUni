<?php
if(!isset($_REQUEST['input'])) {
    ?>
    <form >
        <textarea name = "input" ></textarea ><br >
    <input type = "submit" value = "Count words" >
</form >
<?php
}
?>
<?php
if(isset($_REQUEST['input'])) {
    //$str = strtolower($_REQUEST['input']);
    $text = trim($_GET["input"]);
    $words = array_count_values(str_word_count(strtolower($text), 1));
    echo "<table border='2'>";
    foreach ($words as $word => $count) {
        echo "<tr><td>$word</td><td>$count</td></tr>";
    }
    echo '</table>';
}
?>
