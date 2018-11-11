<?php

namespace App\Http;


use App\Service\BookServiceInterface;
use App\Service\UserServiceInterface;

class HomeHttpHandler extends UserHttpHandlerAbstract
{
    public function index(UserServiceInterface $userService)
    {
        if($userService->isLogged()){
            $this->render("books/all");
        }else{
            $this->render("home/index");
        }
    }

    public function profile(UserServiceInterface $userService){
        if(!isset($_SESSION['id'])){
            $this->redirect("login.php");
        }

        $data = $userService->currentUser();

        $this->render("users/profile", $data);

    }



}