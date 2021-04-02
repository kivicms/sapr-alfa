<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CalcController;
use Illuminate\Support\Facades\Route;

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

Route::middleware('api')->prefix('auth')->namespace('Auth')->group(
    function () {
        Route::post('register', [AuthController::class, 'register'])->name('register');
        Route::post('login', [AuthController::class, 'login'])->name('login');
    }
);

Route::middleware('api')->group(
    function () {
        Route::get('create', [CalcController::class, 'create'])->name('calcCreate');
        Route::get('calcs', [CalcController::class, 'calcs'])->name('calcs');
        Route::get('generate', [CalcController::class, 'generate'])->name('generate');
    }
);
