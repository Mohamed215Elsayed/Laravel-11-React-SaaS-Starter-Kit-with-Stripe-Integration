<?php

namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Feature;
use App\Models\Package;

class DatabaseSeeder extends Seeder {
    public function run(): void
    {
        // User::factory(10)->create();
        User::factory()->create([
            'name' => 'mo',
            'email' => 'mohamed215@web.com',
            'password' => bcrypt('123456'),
        ]);
        Feature::factory()->create([
            'image' => '/public/feature1.jpeg',
            'route_name' => 'feature1.index',
            'name' => 'Feature 1',
            'description' => 'calculate sum of two numbers',
            'required_credits' => 1 ,
            'active' => true
        ]);
        Feature::factory()->create([
            'image' => '/public/feature1.jpeg',
            'route_name' => 'feature2.index',
            'name' => 'Feature 2',
            'description' => 'calculate difference of two numbers',
            'required_credits' => 2 ,
            'active' => true
        ]);
        Feature::factory()->create([
            'image' => '/public/feature1.jpeg',
            'route_name' => 'feature3.index',
            'name' => 'Feature 3',
            'description' => 'calculate difference of two numbers',
            'required_credits' => 3 ,
            'active' => true
        ]);

        Package::factory()->create([
            'name' => 'Basic',
            'price' => 5,
            'credits' => 20 
        ]);
        Package::factory()->create([
            'name' => 'Silver',
            'price' =>  20 ,
            'credits' =>100
        ]);
        Package::factory()->create([
            'name' => 'Gold',
            'price' => 50,
            'credits' => 500
        ]);
    }
}
