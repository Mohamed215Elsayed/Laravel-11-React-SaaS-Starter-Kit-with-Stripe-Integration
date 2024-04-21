<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UsedFeature;
use App\Http\Resources\UsedFeatureResource;
use Inertia\Inertia;
class DashboardController extends Controller
{
    public function index()
    {
        $usedfeatures = UsedFeature::query()
        ->with(['feature'])
        ->where('user_id', auth()->user()->id)
        ->latest()
        ->paginate(5);
        return Inertia::render('Dashboard', [
            'usedfeatures' => UsedFeatureResource::collection($usedfeatures),
        ]);
    }
}
