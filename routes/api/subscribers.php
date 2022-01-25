<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/', 'SubscriberController@store')->name('subscriber.store');
    Route::get('/', 'SubscriberController@index')->name('subscriber.index');
    Route::get('/{id}', 'SubscriberController@show')->name('subscriber.show');
    Route::match(['put', 'patch'], '/{id}', 'SubscriberController@update')->name('subscriber.update');
    Route::delete('/{id}', 'SubscriberController@delete')->name('subscriber.delete');
});
