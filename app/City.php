<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = [
        'priority',
        'active',
        'country_id',
        'name',
        'url',
        'country',
        'keywords',
        'descriptions'
    ];
    
    public function country()
    {
         return $this->belongsTo(Country::class);
    }
    
    public function districts()
    {
        return $this->hasMany(District::class);
    }
}
