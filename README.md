# Introduction

This is a dummy project based on Laravel and React.js.


## Prerequisite

1. Make sure you have [composer](https://getcomposer.org/download/) installed.
2. Make sure you have latest stable version of [node](https://nodejs.org/en/download/) installed.

### Installation

Setup Laravel 

```bash
composer install && composer update
php artisan key:gen
php artisan serve
```

The Bootstrap and React scaffolding provided by Laravel is located in the `laravel/ui` Composer package, which may be installed using Composer:
```bash
npm install
composer require laravel/ui
php artisan ui react
```

## License

The Project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
