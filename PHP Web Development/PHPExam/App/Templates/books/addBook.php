<?php /** @var \App\Data\EditDTO $data */ ?>

<h1>Add new Book</h1>

<a href="profile.php">My profile</a>
<form method="post">
    Book Title: <input type="text" name="title" minlength="3" maxlength="50"/><br />
    Book Author: <input type="text" name="auth" minlength="3" maxlength="50"/><br />
    Description: <input type="text" name="description" minlength="10" maxlength="10000"/><br />
    Image:<input type="text" name="image"  minlength="3" maxlength="255"/><br />
    Genre: <select name="genre_id">
        <?php foreach ($data->getGenre() as $genre): ?>
            <option value="<?=$genre->getId(); ?>"><?= $genre->getName(); ?></option>
        <?php endforeach; ?>
    </select><br />
    <input type="submit" name="save" value="Save"/><br />
</form>
