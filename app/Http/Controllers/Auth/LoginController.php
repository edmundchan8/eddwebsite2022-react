<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Rules\Password;
use DB;


class LoginController extends Controller
{   

    // Authenticate users
    public function authenticate(Request $request){
        // validate requested into a credentials variable
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        
        // if the credentials email and password are correctly provided 
        // attempt method accepts array of key/value pairs
        // it checks database to see if user exists in database
        
        if(Auth::attempt($credentials)){
            // regenerate the requeste session
            $request->session()->regenerate();
            $user = Auth::user();
            return response()->json($user);

            // return user to 'welcome'
            //return redirect()->intended('welcome');
   
        }

        // else, if credentials fails, we return an error
        return back()->withErrors([
            
            'email' => 'The proviided credentials do not match our records.',
        ])->onlyInput('email');
    }


    public function login(Request $request){
        return 'test';
    }
}
