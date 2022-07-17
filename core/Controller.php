<?php


class Controller
{
    public function __construct()
    {
    }

    public function view(string $viewUrl)
    {
        require("header.php");
        require("nav.php");
        require("views/" . $viewUrl . ".php");
        require("footer.php");
    }

}