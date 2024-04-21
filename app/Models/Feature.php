<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    use HasFactory;
// image route_name name description required_credits active
    protected $fillable = ['image','route_name','name','description','required_credits','active'];
}
