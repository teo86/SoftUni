<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Capital-Case Words</title>
</head>
<body>
<form>
    <textarea rows="10" name="text"></textarea><br>
    <input type="submit" value="Extract">
</form>
<?php
if(isset($_REQUEST['text'])){
    $arr = preg_split('/\W+/',$_REQUEST['text']);
    $result = [];
    foreach ($arr as $str) {
        if(preg_match('/^[A-Z]+$/',$str)){
            $result[] = $str;
        }
    }
    echo implode(', ',$result);
}
?>
</body>
</html>