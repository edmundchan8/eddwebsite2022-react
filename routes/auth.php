<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
|
| Here is where you can register Auth routes for your application. 
|
*/

// LOGIN CONTROLLER
Route::post('/auth/authenticate', [LoginController::class, 'authenticate']);
Route::middleware('auth:sanctum')->get('/auth/index', [LoginController::class, 'index']);
Route::group(['middleware' => ['web']], function () {
    // your routes here
    Route::post('/authenticate', [LoginController::class, 'authenticate']);
});
Route::get('/auth/removeToken', [LoginController::class, 'removeToken']);

// REGISTER CONTROLLER
Route::post('/auth/register', [RegisterController::class, 'register']);
