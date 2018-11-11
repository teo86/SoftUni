<?php

namespace App\Http;


use App\Data\EditDTO;
use App\Data\BookDTO;
use App\Service\GenreService;
use App\Service\GenreServiceInterface;
use App\Service\BookService;
use App\Service\BookServiceInterface;
use App\Service\UserService;
use App\Service\UserServiceInterface;

class BookHttpHandler extends UserHttpHandlerAbstract
{

    /**
     * @param BookServiceInterface $bookService
     * @param UserServiceInterface $userService
     * @param GenreServiceInterface $genreService
     * @param array $formData
     * @throws \Exception
     */
    public function add(BookServiceInterface $bookService,
                        UserServiceInterface $userService,
                        GenreServiceInterface $genreService,
                        array $formData = [])
    {

//        $book = new BookDTO();
//        $book->setTitle($formData['title']);
//        $book->setAuth($formData['auth']);
//        $book->setDescription($formData['description']);
//        $book->setImage($formData['image']);
//        $book->setAuthor($userService->currentUser());
//        $book->setGenre($genreService->getOne($formData['genre_id']));

        /** @var EditDTO $bookDTO */
        $book = $this->dataBinder->bind($formData, BookDTO::class);
        $editDTO = new EditDTO();
        $editDTO->setBook($book);
        $editDTO->setGenre($genreService->getAll());

        if(isset($formData['save'])){
            $this->handleInsertProcess($bookService, $userService, $genreService, $formData);
        }else{
            $this->render("books/addBook", $editDTO);
        }
    }

    public function details(BookServiceInterface $bookService,
                            GenreServiceInterface $genreService,
                            array $getData = [])
    {

        $book = $bookService->getOne(intval($getData['id']));

        $editDTO = new EditDTO();
        $editDTO->setBook($book);
        $editDTO->setGenre($genreService->getAll());


            $this->render("books/details", $editDTO);
    }

    public function edit(BookServiceInterface $bookService,
                         UserServiceInterface $userService,
                         GenreServiceInterface $genreService,
                         array $formData = [], array $getData = [])
    {

        $book = $bookService->getOne(intval($getData['id']));

        $editDTO = new EditDTO();
        $editDTO->setBook($book);
        $editDTO->setGenre($genreService->getAll());


        if(isset($formData['save'])){
            $this->handleEditProcess($bookService, $userService, $genreService, $formData, $getData);
        }else{
            $this->render("books/edit", $editDTO);
        }
    }

    public function delete(BookServiceInterface $bookService, array $getData = []){

        if(!isset($getData['id'])){
            $this->redirect("profile.php");
        }
        $bookService->delete(intval($getData['id']));
        $this->redirect("profile.php");
    }

    /**
     * @param BookServiceInterface $bookService
     */
    public function showMy(BookServiceInterface $bookService){
        $book = $bookService->getMy();
        $this->render('books/myBooks', $book);
    }

    public function showAll(BookServiceInterface $bookService){

        $book = $bookService->getAll();
        $this->render('books/allBooks', $book);
    }

    /**
     * @param $bookService
     * @param $userService
     * @param $genreService
     * @param $formData
     * @throws \Exception
     */
    private function handleInsertProcess($bookService, $userService, $genreService, $formData)
    {

        $book = new BookDTO();
        $book->setTitle($formData['title']);
        $book->setAuth($formData['auth']);
        $book->setDescription($formData['description']);
        $book->setImage($formData['image']);

        /** @var BookDTO $book */
        //$book = $this->dataBinder->bind($formData, BookDTO::class);
        /** @var UserService $userService */
        $author = $userService->currentUser();
        /** @var GenreService $genreService */
        /** @var GenreService $genreService */
        $genre = $genreService->getOne(intval($formData['genre_id']));
        $book->setAuthor($author);
        $book->setGenre($genre);

        /** @var BookService $bookService */
        $bookService->add($book);
        $this->redirect("profile.php");

    }

    private function handleEditProcess($bookService, $userService, $genreService, $formData, $getData)
    {

        try {
            /** @var BookDTO $task */
            $task = $this->dataBinder->bind($formData, BookDTO::class);
            /** @var UserService $userService */
            $author = $userService->currentUser();
            /** @var GenreService $genreService */
            /** @var GenreService $genreService */
            $genre = $genreService->getOne(intval($formData['genre_id']));
            $task->setAuthor($author);
            $task->setGenre($genre);
            $task->setId($getData['id']);

            /** @var BookService $bookService */
            $bookService->edit($task, intval($getData['id']));
            $this->redirect("profile.php");
        }catch (\Exception $ex){

        }
    }

}