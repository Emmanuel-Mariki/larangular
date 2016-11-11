<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{   
    protected $fillable = [
        'priority',
        'active',
        'type_id',
        'name',
        'url',
        'title',
        'keywords',
        'descriptions'
    ];
    
    public function type()
    {
         return $this->belongsTo(Type::class);
    }
}
