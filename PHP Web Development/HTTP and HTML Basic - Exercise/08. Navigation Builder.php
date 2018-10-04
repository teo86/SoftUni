<form>
    Categories:
    <input type="text" name="categories"><br>
    Tags:
    <input type="text" name="tags"><br>
    Months:
    <input type="text" name="months"><br>
    <input type="submit" name="input" value="Generate" required>
</form>
<?php
if (isset($_REQUEST['categories']) && isset($_REQUEST['tags']) && isset($_REQUEST['months'])) {
    $categories = array_map('trim',explode(', ',$_REQUEST['categories']));
    $tags = array_map('trim',explode(', ',$_REQUEST['tags']));
    $months = array_map('trim',explode(', ',$_REQUEST['months']));

    echo "<h2>" . "Categories" . "</h2><ul>";
    foreach ($categories as $key) {
        echo "<li>" . $key . "</li>";
    }
    echo "</ul><h2>" . "Tags" . "</h2><ul>";
    foreach ($tags as $key) {
        echo "<li>" . $key . "</li>";
    }
    echo "</ul><h2>" . "Months" . "</h2><ul>";
    foreach ($months as $key) {
        echo "<li>" . $key . "</li>";
    }
    echo "</ul>";
}