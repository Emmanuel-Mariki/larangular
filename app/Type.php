<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $fillable = [
      'priority', 'active','name','url','title','keywords','descriptions'
    ];
    
    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
