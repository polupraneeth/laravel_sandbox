<?php


namespace Database\Factories;


use App\Models\User;
use App\Models\Subscriber;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class SubscriberFactory extends Factory
{
    protected $model = Subscriber::class;

    public function definition(): array
    {
        $name = $this->faker->name;

        return [
            'user_id' => User::factory(),
            'name' => $name,
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'slug' => Str::slug($name),
            'published' => true,
            'published_at' => Carbon::now(),
        ];
    }
}
