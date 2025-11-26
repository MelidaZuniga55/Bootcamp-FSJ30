<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
Use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function register(Request $request){
        // Validamos los datos request o la peticion
        try{
        $request->validate([
            'name' => 'required|string|max:255|unique:users|alpha|min:8|regex:/^[A-Za-z]+$/',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name'=> $request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);

        return response()->json([
            'message' => 'user registered successfully',
            'user' => $user,
            'status' => 201
        ], 201);
    } catch (\Exception $error){
        return response()->json([
            'massage' => 'Error registered user',
            'error' => $error->getMessage()
        ]);
    }
    }

    public function login(Request $request){
    //Validmos los datos de request o la peticion
    $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string|min:8'
    ]);

    //Extaremos solo los datos que vamos a trabajar dep body de la peticion
    $credentials = $request->only('email', 'password');

    //Intentar autenticar al usuario con las credenciales
    //Aut::attempt devuelve true or false, dependiendo si las credenciles son correctas
    if(Auth::attempt($credentials)) {
        //Si las credential funcionaron, obtenemos el usuario
        $user = $request->user();
        //$user = Aut::user();

        //Declaramos el tiempo de expiracion del token 
        $expirationTimeToken = Carbon::now()->addMinutes(30);

        //Generamos un token de acceso para el usuario autenticado
        $token = $user->createToken('auth_token', ['server:update'],$expirationTimeToken)->plainTextToken;

        return response()->json([
            'message' => 'User logged successfully',
            'user' => $user,
            'token' => $token,
            'status' => 200
        ], 200);
    }
}

public function logout(Request $request){
    //Obtenemos el usario logueado a traves del request (no se pasa en el body) en el authorization
    $user = $request->user();

    //Revocamos ese token, hace que el token quede invalido y que el usuario tenga que generar uno nuevo
    $user->currentAccessToken()->delete();

    //Revocamos TODOS los tokens activos -> Sirve para caambios de contrasenias o una funcionalidad en especifico de cerrar todas las sesiones del usuario
    //$user->tokens()->delete

    return response()->json([
        'message' => 'User logged out successfully',
        'status' => 200
    ],200);
}
}