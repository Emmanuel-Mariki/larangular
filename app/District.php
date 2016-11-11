<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    protected $fillable = [
        'url',
        'name',
        'city',
        'active',
        'city_id',
        'country',
        'priority',
        'keywords',
        'country_id',
        'descriptions'
    ];
    
    public function country()
    {
         return $this->belongsTo(Country::class);
    }
    
    public function city()
    {
         return $this->belongsTo(City::class);
    }
}
