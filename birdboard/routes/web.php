<?php

use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ProjectTaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('projects', [ProjectsController::class, 'index']);
    Route::get('projects/create', [ProjectsController::class, 'create']);
    Route::post('projects', [ProjectsController::class, 'store']);
    Route::get('projects/{project}', [ProjectsController::class, 'show']);
    Route::post('projects/{project}/tasks', [ProjectTaskController::class, 'store']);
    Route::patch('projects/{project}/tasks/{task}', [ProjectTaskController::class, 'update']);
});

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
