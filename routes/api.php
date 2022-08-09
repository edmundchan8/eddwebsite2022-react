<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TodolistController;


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
Route::get('/todolist', [TodolistController::class, 'index']);
Route::post('/todolist/add', [TodolistController::class, 'add']);
Route::delete('/todolist/remove', [TodolistController::class, 'remove']);

// USERS CONTROLLER
Route::get('/user/index', [UserController::class, 'index']);
Route::delete('/user/{id}', [UserController::class, 'delete']);

Route::get('/greetingapi', function () {
    return 'Hello World';
});