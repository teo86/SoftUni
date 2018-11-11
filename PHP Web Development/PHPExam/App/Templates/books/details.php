<?php /** @var \App\Data\EditDTO $data */ ?>

<h1>Details</h1>
<a href="profile.php">My profile</a>
Title: <div ><?= $data->getBook()->getTitle(); ?></div><br/>

Category: <div><?= $data->getBook()->getGenre()->getName(); ?></div><br/>

Description <div><?= $data->getBook()->getDescription(); ?></div><br/>

Book Author:<div><?= $data->getBook()->getAuth(); ?></div><br/>
    <img src="<?= $data->getBook()->getImage(); ?>">
