<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Subscriber;
use Carbon\Carbon;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Str;

class SubscriberTest extends TestCase
{
    use DatabaseTransactions;

    public $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = $this->createAdminUser();
    }

    private function createAdminUser()
    {
        return User::create([
            'name' => 'Praneeth Polu',
            'email' => 'contact@polupraneeth.me',
            'password' => bcrypt('secret'),
            'is_admin' => true,
            'remember_token' => Str::random(10),
        ]);
    }

}
