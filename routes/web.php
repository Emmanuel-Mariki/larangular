<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/countries/NoRelation', function () {
    $countries =\App\Country::all();
    return response()->json($countries);

});
Route::get('/dashboard/countries/{country}/cities', function ($county) {
    $cities =\App\City::where('country',$county)->get();
    return response()->json($cities);

});

Route::get('/home', 'HomeController@index');
Route::resource('/types', 'TypeController');
Route::resource('/cities', 'CityController');
Route::resource('/countries', 'CountryController');
Route::resource('/districts', 'DistrictController');
Route::resource('/categories', 'CategoryController');


Route::get('/home', 'HomeController@index');

Auth::routes();

Route::get('/home', 'HomeController@index');

Auth::routes();

Route::get('/home', 'HomeController@index');

Auth::routes();

Route::get('/home', 'HomeController@index');
