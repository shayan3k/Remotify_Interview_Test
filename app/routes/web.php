<?php

use App\Http\Controllers\PlayerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* ----------------------------------------------------------------
| Dashboard Route
----------------------------------------------------------------*/

Route::get('/', function () {
    return view('dashboard');
});


/* ----------------------------------------------------------------
| ck editor Route
----------------------------------------------------------------*/
Route::get('ckeditor', [CkeditorController::class, 'index']);
Route::post('ckeditor/upload', [CkeditorController::class, 'upload'])->name('ckeditor.upload');



/* ----------------------------------------------------------------
| Model Routes
----------------------------------------------------------------*/
Route::resource('players', PlayerController::class);
