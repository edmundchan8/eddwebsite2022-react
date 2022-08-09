<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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

        // $credentials = $request->only('email', 'password');
        
        // if the credentials email and password are correctly provided 
        // attempt method accepts array of key/value pairs
        // it checks database to see if user exists in database
        
        if(Auth::attempt($credentials)){
            // regenerate the requeste session
            $request->session()->regenerate();
            
            //create a sanctum token called auth_token
            $token = $request->user()->createToken('auth_token')->plainTextToken;

            return response()->json([
                'access_token' => $token,
                'token-type' => 'Bearer'
            ]);
        }

        // else, if credentials fails, we return an error
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function removeToken(){
        return "removing token";
    }
}