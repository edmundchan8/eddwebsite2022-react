<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{

    // register new users
    public function register(Request $request){
        
        // validate requested into a credentials variable
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        
        // if the credentials email and password are correctly provided 
        // attempt method accepts array of key/value pairs
        if(Auth::attempt($credentials)){
            // regenerate the requeste session
            $request->session()->regenerate();

            // return user to 'dashboard'
            return redirect()->intended('dashboard');
        }

        // else, if credentials fails, we return an error
        return back()->withErrors([
            'email' => 'The proviided credentials do not match our records.',
        ])->onlyInput('email');
    }


    public function login(Request $request){
        //test
    }
}
