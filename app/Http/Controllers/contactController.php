<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class contactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::all();
        return response()->json(['status'=>'success','contacts'=>$contacts]);
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
    public function store(Request $request)
    {

        $newContact = Contact::create([
            'fullname'     =>      $request->get('fullname'),
            'email'         =>      $request->get('email'),
            'phoneno'       =>      $request->get('phoneno')
        ]);
        //return response()->json($newContact);die;    
        if($newContact){
            return response()->json(['status'=>'success']);
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $contact= Contact::find($id);
        return response()->json(['status'=>'success','contact'=>$contact]);
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
        $contact = Contact::find($id);
        $contact->fullname = $request->fullname;
        $contact->email = $request->email;
        $contact->phoneno = $request->phoneno; 

        if($contact->save()){
            return response()->json(['status'=>'success']);
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
        $contact = Contact::find($id);
        if($contact->delete()){
            return response()->json(['status'=>'success']);
        }
    }
}
