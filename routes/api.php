<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// LOGIN CONTROLLER
Route::post('/register', [LoginController::class, 'register']);

Route::group(['middleware' => ['web']], function () {
    // your routes here
    Route::post('/authenticate', [LoginController::class, 'authenticate']);
});

// TODOLIST CONTROLLER
Route::get('/todolist', [TodolistController::class, 'index']);
Route::post('/todolist/add', [TodolistController::class, 'add']);
Route::delete('/todolist/remove', [TodolistController::class, 'remove']);
