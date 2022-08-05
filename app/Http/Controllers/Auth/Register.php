<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    //register new users
    public function register(Request $request){
        $user = new User;
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email',
            'password' => 'required', 'confirmed', Password::min(8)
        ]);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = \Hash::make($request->password);

        $user->save();

        // create sanctum token
        $token = $user->createToken('auth_token')->plainTextToken;
    
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);

    }

}
