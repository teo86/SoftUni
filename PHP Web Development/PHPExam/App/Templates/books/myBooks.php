<?php /** @var \App\Data\BookDTO[] $data */ ?>

<h1>My Books</h1>

<a href="addBook.php">Add new Book</a> | <a href="profile.php">My Profile</a> |
<a href="logout.php">logout</a>  <br /><br />

<table border="1">
    <thead>
    <tr>
        <td>Title</td>
        <td>Author</td>
        <td>Genre</td>
        <td>AddedBy</td>
        <td>Edit Book</td>
        <td>Delete</td>
    </tr>
    </thead>

    <tbody>
    <?php foreach ($data as $book): ?>
        <tr>
            <td><?= $book->getTitle() ?></td>
            <td><?= $book->getAuth(); ?></td>
            <td><?= $book->getGenre()->getName(); ?></td>
            <td><?= $book->getAuthor()->getFullName(); ?></td>
            <td><a href="edit.php?id=<?= $book->getId(); ?>">Edit</a></td>
            <td><a href="delete.php?id=<?= $book->getId(); ?>">Delete</a></td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>