<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = [
        'priority',
        'active',
        'name',
        'url',
        'keywords',
        'descriptions'
    ];
    
    public function cities()
    {
        return $this->hasMany(City::class);
    }
    
    public function districts()
    {
        return $this->hasMany(District::class);
    }
}
