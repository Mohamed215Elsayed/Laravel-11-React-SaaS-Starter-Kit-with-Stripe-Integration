<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Package;
class Transaction extends Model
{
    use HasFactory;
    // status price credits session_id user_id package_id
    protected $fillable = ['status','price' , 'credits','session_id','user_id','package_id'];
    public function user(){
        return $this->belongsTo(User::class); 
    }

    public function package(){
        return $this->belongsTo(Package::class,'package_id');
    }
}
