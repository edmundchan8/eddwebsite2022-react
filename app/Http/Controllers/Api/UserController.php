<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use DB;

class UserController extends Controller
{
    public function index(){
        //$users = DB::select('select * from users');
        return response()->json(User::all());
        //return $users;
    }

    public function delete($id){
        $deleted = DB::table('users')->where('id', '=', $id)->delete();
    }
}
