<?php

namespace App\Repository;


use App\Data\GenreDTO;
use App\Data\BookDTO;
use App\Data\UserDTO;
use Core\DataBinderInterface;
use Database\DatabaseInterface;

class BookRepository implements BookRepositoryInterface
{
    /**
     * @var DatabaseInterface
     */
    private $db;

    /**
     * @var DataBinderInterface
     */
    private $dataBinder;

    public function __construct(DatabaseInterface $db, DataBinderInterface $dataBinder)
    {
        $this->db = $db;
        $this->dataBinder = $dataBinder;
    }

    /**
     * @return \Generator|BookDTO[]
     */
    public function findAll(): \Generator
    {
       $lazyTaskResult = $this->db->query("
            SELECT 
              books.books_id AS book_id, 
              title, 
              description, 
              image,
              author AS auth,
              users.user_id AS author_id,
              users.username,
              users.password,
              users.full_name,
              users.born_on,
              genres.genre_id AS genre_id,
              genres.name
            FROM books
            INNER JOIN users users ON books.user_id = users.user_id
            INNER JOIN genres genres ON books.genre_id = genres.genre_id
            ORDER BY books.added_on DESC
        ")->execute()
            ->fetch();

        foreach ($lazyTaskResult as $row){

            /** @var BookDTO $book */
            $book = $this->dataBinder->bind($row, BookDTO::class);
            /** @var UserDTO $author */
            $author = $this->dataBinder->bind($row, UserDTO::class);
            /** @var GenreDTO $genre */
            $genre = $this->dataBinder->bind($row, GenreDTO::class);

            $book->setId($row['book_id']);
            $author->setId($row['author_id']);
            $genre->setId($row['genre_id']);

            $book->setAuthor($author);
            $book->setGenre($genre);

            yield $book;
        }
    }

    public function findMy(): \Generator
    {

        $id = $_SESSION['id'];
        $lazyTaskResult = $this->db->query("
            SELECT 
              books.books_id AS book_id, 
              title, 
              description, 
              image,
              author AS auth,
              users.user_id AS author_id,
              users.username,
              users.password,
              users.full_name,
              users.born_on,
              genres.genre_id AS genre_id,
              genres.name
            FROM books
            INNER JOIN users users ON books.user_id = users.user_id
            INNER JOIN genres genres ON books.genre_id = genres.genre_id
            WHERE books.user_id = ?
            ORDER BY books.added_on DESC
        ")->execute([$id])
            ->fetch();

        foreach ($lazyTaskResult as $row){

            /** @var BookDTO $book */
            $book = $this->dataBinder->bind($row, BookDTO::class);
            /** @var UserDTO $author */
            $author = $this->dataBinder->bind($row, UserDTO::class);
            /** @var GenreDTO $genre */
            $genre = $this->dataBinder->bind($row, GenreDTO::class);

            $book->setId($row['book_id']);
            $author->setId($row['author_id']);
            $genre->setId($row['genre_id']);

            $book->setAuthor($author);
            $book->setGenre($genre);

            yield $book;
        }
    }

    public function findOne(int $id): BookDTO
    {
        $row = $this->db->query("
            SELECT 
              books.books_id AS book_id, 
              title, 
              description, 
              image,
              author AS auth,
              users.user_id AS author_id,
              users.username,
              users.password,
              users.full_name,
              users.born_on,
              genres.genre_id AS genre_id,
              genres.name
            FROM books
            INNER JOIN users users ON books.user_id = users.user_id
            INNER JOIN genres genres ON books.genre_id = genres.genre_id
            WHERE books.books_id = ?
        ")->execute([$id])
            ->fetch()
            ->current();


        /** @var BookDTO $book */
        $book = $this->dataBinder->bind($row, BookDTO::class);
        /** @var UserDTO $author */
        $author = $this->dataBinder->bind($row, UserDTO::class);
        /** @var GenreDTO $genre */
        $genre = $this->dataBinder->bind($row, GenreDTO::class);

        $book->setId($row['book_id']);
        $author->setId($row['author_id']);
        $genre->setId($row['genre_id']);

        $book->setAuthor($author);
        $book->setGenre($genre);

        return $book;
    }

    public function insert(BookDTO $bookDTO): bool
    {

        $this->db->query("
                INSERT INTO books (title, author, description, image, genre_id, user_id) 
                VALUES (?,?,?,?,?,?)
            ")->execute([
                $bookDTO->getTitle(),
                $bookDTO->getAuth(),
                $bookDTO->getDescription(),
                $bookDTO->getImage(),
                $bookDTO->getGenre()->getId(),
                $bookDTO->getAuthor()->getId(),

        ]);

        return true;
    }

    public function update(BookDTO $bookDTO, int $id): bool
    {
        $this->db->query("
                UPDATE books
                SET 
                  title = ?,
                  description = ?,
                  author = ?,
                  user_id = ?,
                  genre_id = ?
                WHERE books_id = ?  
            ")->execute([
                $bookDTO->getTitle(),
                $bookDTO->getDescription(),
                $bookDTO->getAuth(),
                $bookDTO->getAuthor()->getId(),
                $bookDTO->getGenre()->getId(),
                $id
        ]);

        return true;
    }

    public function remove(int $id): bool
    {
       $this->db->query("DELETE FROM books WHERE books_id = ?")->execute([$id]);
       return true;
    }
}