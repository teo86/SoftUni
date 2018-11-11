<?php

namespace App\Data;


class EditDTO
{
    /**
     * @var BookDTO
     */
    private $book;

    /**
     * @var GenreDTO[]
     */
    private $genre;

    /**
     * @return BookDTO
     */
    public function getBook(): BookDTO
    {
        return $this->book;
    }

    /**
     * @param BookDTO $book
     */
    public function setBook(BookDTO $book): void
    {
        $this->book = $book;
    }

    /**
     * @return GenreDTO[]
     */
    public function getGenre()
    {
        return $this->genre;
    }

    /**
     * @param GenreDTO[] $genre
     */
    public function setGenre($genre): void
    {
        $this->genre = $genre;
    }



}