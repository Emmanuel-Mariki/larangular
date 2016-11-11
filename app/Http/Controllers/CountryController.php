<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Country;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Country $country)
    {
        $countries = $country->with('cities')->get();
        
        return response()->json($countries);
    }
//    
//    public function NoRelation(Country $country)
//    {
//        $countries = $country->all();
//        
//        return response()->json($countries);
//    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Country $country)
    {
        $data = $request->all()['Country'];
        
        if($country->create($data))
        {
            return response()->json(['success'=>'Property type created successfuly']);
        }
        else
        {
           return response()->json(['error'=>'Property type creation failed']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    { 
        if($country = Country::where('id',$id)->first())
        {
            return response()->json($country);
        }
        else
        {
           return response()->json(['error'=>'Qury failed']);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if($country = Country::where('id',$id)->first())
        {
            return response()->json($country);
        }
        else
        {
           return response()->json(['error'=>'Qury failed']);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all()['Country'];

        $country = Country::where('id',$id)->update($data);
        
        return response()->json($country);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
