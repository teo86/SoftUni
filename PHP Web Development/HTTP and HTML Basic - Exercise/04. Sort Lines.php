<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sort Lines</title>
</head>
<body>
<?php
$sortedLines = [];
if(isset($_REQUEST['lines'])) {
    $sortedLines = array_map('trim',explode("\n",$_REQUEST['lines']));
    usort($sortedLines,function ($a,$b){
        return $a <=> $b;
    });
}
?>
<form>
  <textarea rows="10" name="lines"><?= implode("\n",$sortedLines)
      ?></textarea> <br>
    <input type="submit" value="Sort">
</form>

</body>
</html>