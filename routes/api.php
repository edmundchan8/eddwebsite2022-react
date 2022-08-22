<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TodolistController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\StockmanagerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// TODOLIST CONTROLLER

Route::post('/todolist/add', [TodolistController::class, 'add']);
Route::delete('/todolist/remove', [TodolistController::class, 'remove']);

 
    // LOGIN CONTROLLER
Route::post('/login', [LoginController::class, 'authenticate'])->name('login');

 Route::group(['middleware' => ['auth:sanctum']], function () {
    
    // your routes here   
    //TODOLIST 
    Route::get('/todolist', [TodolistController::class, 'index']);


    // USERS CONTROLLER
    Route::get('/users', [UserController::class, 'index']);
    Route::delete('/user/{id}', [UserController::class, 'delete']);
});


// REGISTER CONTROLLER
Route::post('/register', [RegisterController::class, 'register']);

// STOCKMANAGER CONTROLLER
// Route::middleware('auth:sanctum')->get('/stockmanager/index', [StockManagerController::class, 'index'])->name('login');
