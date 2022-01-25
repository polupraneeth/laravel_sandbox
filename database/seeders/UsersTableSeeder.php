<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Subscriber;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
            ->has(Subscriber::factory(10))
            ->create([
                'name' => 'Praneeth Polu',
                'email' => 'contact@polupraneeth.me',
                'password' => bcrypt('csusandbox'),
                'is_admin' => true,
                'remember_token' => Str::random(10),
            ]);

        User::factory(3)->create();
    }
}
