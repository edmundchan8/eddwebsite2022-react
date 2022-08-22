<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use DB;


class LoginController extends Controller
{
    // Authenticate users
    public function authenticate(Request $request){
        // requested only the email and password
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);


        // if the credentials email and password are correctly provided 
        // try to find user in database
        $user = User::where('email', $request['email'])->first();

        if (!$user || !\Hash::check($credentials['password'], $user->password)) {
            
           return response (['message' => 'The provided credentials are incorrect.'], 401);
        } else {

            // remove all tokens
            //$user->tokens()->delete();

            // $token = $user->createToken('auth_token')->plainTextToken;
            
            $response = [
                'user' => $user,
                // 'access_token' => $token,
                // 'token_type' => 'Bearer',
            ];

            return response($response, 200);
        }
    }
}