<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feature;
use App\Http\Resources\FeatureResource;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
class HomeController extends Controller
{
    public function index()
    {
        $features = Feature::where('active', true)->get();
        return Inertia::render(
            "Welcome",
            [
                "features" => FeatureResource::collection($features),
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register')
            ]
        );
    }
}
