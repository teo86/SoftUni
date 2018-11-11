<?php

require_once "common.php";

$homeHttpHandler = new \App\Http\HomeHttpHandler($template, new \Core\DataBinder());
$userService = new \App\Service\UserService(new \App\Repository\UserRepository($db));
$homeHttpHandler->profile($userService);