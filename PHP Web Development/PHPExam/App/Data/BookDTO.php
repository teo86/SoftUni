<?php

namespace App\Data;


class BookDTO
{
    const TITLE_MIN_LENGTH = 3;
    const TITLE_MAX_LENGTH = 50;

    const AUTHOR_MIN_LENGTH = 3;
    const AUTHOR_MAX_LENGTH = 50;

    const DESCRIPTION_MIN_LENGTH = 10;
    const DESCRIPTION_MAX_LENGTH = 10000;

    const IMAGE_MIN_LENGTH = 3;
    const IMAGE_MAX_LENGTH = 255;

    private $id;
    private $title;
    private $auth;
    private $description;
    private $image;
    private $addedOn;



    /**
     * @var UserDTO
     */
    private $author;

    /**
     * @var GenreDTO
     */
    private $genre;



    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * const TITLE_MAX_LENGTH = 50;Mixed $title
     * @param $title
     * @throws \Exception
     */
    public function setTitle($title): void
    {
        PDOValidator::validate(
            self::TITLE_MIN_LENGTH,
            self::TITLE_MAX_LENGTH,
            $title,
            "Title out of range"
        );

        $this->title = $title;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     * @throws \Exception
     */
    public function setDescription($description): void
    {
        PDOValidator::validate(
            self::DESCRIPTION_MIN_LENGTH,
            self::DESCRIPTION_MAX_LENGTH,
            $description,
            "Description out of range"
        );


        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * @param mixed $image
     * @throws \Exception
     */
    public function setImage($image): void
    {
        PDOValidator::validate(
            self::IMAGE_MIN_LENGTH,
            self::IMAGE_MAX_LENGTH,
            $image,
            "Image out of range"
        );


        $this->image = $image;
    }

    /**
     * @return UserDTO
     */
    public function getAuthor(): UserDTO
    {
        return $this->author;
    }

    /**
     * @param UserDTO $author
     */
    public function setAuthor(UserDTO $author): void
    {
        $this->author = $author;
    }

    /**
     * @return GenreDTO
     */
    public function getGenre(): GenreDTO
    {
        return $this->genre;
    }

    /**
     * @param GenreDTO $genre
     */
    public function setGenre(GenreDTO $genre): void
    {
        $this->genre = $genre;
    }

    /**
     * @return mixed
     */
    public function getAddedOn()
    {
        return $this->addedOn;
    }

    /**
     * @param mixed $addedOn
     */
    public function setAddedOn($addedOn): void
    {
        $this->addedOn = $addedOn;
    }



    /**
     * @return mixed
     */
    public function getAuth()
    {
        return $this->auth;
    }

    /**
     * @param mixed $auth
     * @throws \Exception
     */
    public function setAuth($auth): void
    {
        PDOValidator::validate(
            self::AUTHOR_MIN_LENGTH,
            self::AUTHOR_MAX_LENGTH,
            $auth,
            "Author must be between 3 and 50 chars"
        );

        $this->auth = $auth;
    }

}