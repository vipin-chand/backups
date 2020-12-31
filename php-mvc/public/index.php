<?php

use app\controllers\AuthController;
use app\controllers\SiteController;


require_once __DIR__ . './../vendor/autoload.php';

ini_set("display_errors", "1");
error_reporting(E_ALL);

$app = new app\core\Application(dirname(__DIR__));

$app->router->get('/', [SiteController::class, 'home']);
$app->router->get('/contact', [SiteController::class, 'contact']);
$app->router->post('/contact', [SiteController::class, 'handleContact']);

$app->router->get('/login', [AuthController::class, 'login']);
$app->router->post('/login', [AuthController::class, 'login']);
$app->router->get('/register', [AuthController::class, 'register']);
$app->router->post('/register', [AuthController::class, 'register']);

$app->run();
