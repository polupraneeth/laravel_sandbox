<?php

use Illuminate\Support\Facades\Route;

Route::get('data', 'DataEntryController@published')->name('data.published.index');
Route::get('data/{id}', 'DataEntryController@published')->name('data.published.show');
