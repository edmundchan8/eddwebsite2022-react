<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controller\Auth\RegisterController;


/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
|
| Here is where you can register Auth routes for your application. 
|
*/

// LOGIN CONTROLLER
Route::get('/login', [LoginController::class, 'login']);
Route::get('/index', [LoginController::class, 'index']);
Route::group(['middleware' => ['web']], function () {
    // your routes here
    Route::post('/authenticate', [LoginController::class, 'authenticate']);
});

// REGISTER CONTROLLER
Route::post('/register', [RegisterController::class, 'register']);