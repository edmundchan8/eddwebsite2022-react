<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Todolist;
use DB;

class TodolistController extends Controller
{
    public function index(){
        $todolists = DB::select('select * from todolists');
        return $todolists;
    }

    public function add(Request $request){
        $todolist = new TodoList;
        $todolist->list = $request->value;
        $todolist->save();
        return $todolist;
    }

    public function remove(Request $request){
        $list = Todolist::find($request->id);
        $list->delete();
    }
}
