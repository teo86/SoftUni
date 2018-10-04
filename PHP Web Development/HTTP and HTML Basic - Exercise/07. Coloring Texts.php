<form>
    <textarea name="input"></textarea><br>
    <input type="submit" placeholder="Color Text">
</form>

<?php
if (isset($_REQUEST['input'])) {
    $input = trim($_REQUEST['input']);
    $clearInput = preg_replace('/\s+/', '', $input);
    for ($i = 0; $i < strlen($clearInput); $i++) {
        if ((ord($clearInput[$i])) % 2 == 0) {
            echo "<span style=\"color:red\">{$clearInput[$i]} </span>";
        } else {
            echo "<span style=\"color:blue\">{$clearInput[$i]} </span>";
        }
    }
}