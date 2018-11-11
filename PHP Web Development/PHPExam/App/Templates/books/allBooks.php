<?php /** @var \App\Data\BookDTO[] $data */ ?>

<h1>All Books</h1>

<a href="addBook.php">Add new Book</a> | <a href="profile.php">My Profile</a> |
    <a href="logout.php">logout</a>  <br /><br />

<table border="1">
    <thead>
        <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Genre</td>
            <td>AddedBy</td>
            <td>Details</td>
        </tr>
    </thead>

    <tbody>
        <?php foreach ($data as $book): ?>
        <tr>
            <td><?= $book->getTitle() ?></td>
            <td><?= $book->getAuth(); ?></td>
            <td><?= $book->getGenre()->getName(); ?></td>
            <td><?= $book->getAuthor()->getFullName(); ?></td>
            <td><a href="details.php?id=<?= $book->getId(); ?>">Details</a></td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>