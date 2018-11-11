<?php /** @var \App\Data\EditDTO $data */ ?>

<h1>Edit Book</h1>
<a href="profile.php">My profile</a>
<form method="post">
    Title: <input value="<?= $data->getBook()->getTitle(); ?>" type="text" name="title" minlength="3"
                  maxlength="50"/><br/>

    Category: <select name="genre_id">
        <?php foreach ($data->getGenre() as $genre): ?>
            <?php if ($data->getBook()->getGenre()->getId() === $genre->getId()) : ?>
                <option selected="selected" value="<?= $genre->getId(); ?>"><?= $genre->getName(); ?></option>
            <?php else: ?>
                <option value="<?= $genre->getId(); ?>"><?= $genre->getName(); ?></option>
            <?php endif; ?>
        <?php endforeach; ?>
    </select><br/>

    Description: <input value="<?= $data->getBook()->getDescription(); ?>" type="text" name="description" minlength="3"
                        maxlength="50"/><br/>
    Image:<input value="<?= $data->getBook()->getImage(); ?>" type="text" name="image"/><br/>
    Book Author:<input value="<?= $data->getBook()->getAuth(); ?>" type="text" name="auth"/><br/>
    <img src="<?= $data->getBook()->getImage(); ?>">
    <input type="submit" name="save" value="Save"/><br/>
</form>

