<?php


class App
{
    public string $controller = "index";
    public string $method = "index";
    public array $params = [];

    public function __construct()
    {
        if (isset($_GET["url"])) {
            $url = $this->parsUrl($_GET["url"]);
            $this->controller = $url[0];
            unset($url[0]);
            if (isset($url[1])) {
                $this->method = $url[1];
                unset($url[1]);
            }
            $this->params = array_values($url);
        }
        $controllerUrl = "controllers/" . $this->controller . ".php";
        if (file_exists($controllerUrl)) {
            require("controllers/" . $this->controller . ".php");
            $object = new $this->controller;
            if (method_exists($object, $this->method)) {
                call_user_func_array([$object, $this->method], $this->params);
            }
        }
    }

    public function parsUrl(string $url): array
    {
        $url = filter_var($url, FILTER_SANITIZE_URL);
        return explode("/", $url);
    }
}