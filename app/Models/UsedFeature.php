<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Feature;
class UsedFeature extends Model
{
    use HasFactory;
    // credits user_id feature_id data
    protected $fillable = ['credits','user_id','feature_id','data'];
    protected function casts(): array
    {
        return [
            'data' => 'array'
        ];
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function feature(){
        return $this->belongsTo(Feature::class,'feature_id');
    }
}
