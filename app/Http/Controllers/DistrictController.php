<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\District;

class DistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(District $district)
    {
        return response()->json($district->all());
    }

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
    public function store(Request $request,District $district)
    {
        $data =$request->all()['District'];
        
        $validate = validator($data); 
        
        if($validate)
        {
            $district->create($data);
            return response()->json($data);
        }
        else 
        {
            return response()->json();
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
        $district = District::where('id',$id)->first();
        
        return response()->json($district);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $data = $request->all()['District'];

        $city = District::where('id',$id)->update($data);
        
        return response()->json($city);
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
    
    protected function validotr($data)
    {
        return Validator::make($data, [
            'url'        => 'required|url|max:100|unique:districts',
            'name'       => 'required|max:80|min:3',
            'country_id' => 'required',
            'country'    => 'required',
            'city_id'    => 'required',
            'city_id'    => 'required',
        ]);
    }
}
