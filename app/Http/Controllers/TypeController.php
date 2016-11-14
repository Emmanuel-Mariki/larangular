<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Type;

class TypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Type $type)
    {
       $type = $type->with('categories')->get();
       return response()->json($type);
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
    public function store(Request $request, Type $type)
    {
        $request = $request->all()['PropertyTypes'];
        
        if($type->create($request))
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
    public function show( $id)
    {
        if($type = Type::where('id',$id)->first())
        {
            return response()->json($type);
        }
        else
        {
           return response()->json(['error'=>'Property type creation failed']);
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
        if($type = Type::where('id',$id)->first())
        {
            return response()->json($type);
        }
        else
        {
           return response()->json(['error'=>'Property type creation failed']);
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
        $request = $request->all()['PropertyTypes'];

        if(Type::where('id',$id)->update($request))
        {
            return response()
            ->json(['success'=>'Property type updated successfuly']);
        }
        else
        {
           return response()
           ->json(['error'=>'Property type update failed']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Type::where('id',$id)->delete())
        {
            return response()
            ->json(['success'=>'Property type deleted successfuly']);
        }
        else
        {
           return response()
           ->json(['error'=>'Property type deletion failed']);
        }
    }
}
