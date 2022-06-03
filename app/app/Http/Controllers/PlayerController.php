<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;


class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $players = Player::orderBy('id', 'desc')->get();
        return view('players.index', compact('players'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('players.create');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'age' => 'required|int|min:0|max:200',
        ]);

        try {
            Player::create([
                'name' => $request->name,
                'description' => $request->description,
                'age' => $request->age,
            ]);

            Toastr::success('message', 'Player has been stored successfully');
            return redirect(route('players.index'));
        } catch (\Exception $exception) {
            Toastr::error('message', 'Player was not stored successfully');
            return redirect(route('players.create'));
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
    public function edit(Player $player)
    {
        return view('players.edit', compact('player'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Player $player)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'age' => 'required|int|min:0|max:200',
        ]);

        try {

            $player->update([
                'name' => $request->name,
                'description' => $request->description,
                'age' => $request->age,

            ]);


            Toastr::success('message', 'Player has been edited successfully');
            return redirect(route('players.index'));
        } catch (\Exception $exception) {

            Toastr::error('message', 'Player was not edited successfully');
            return redirect(route('players.index'));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Player $player)
    {
        try {
            $player->delete();

            Toastr::success('message', 'Player has been removed successfully');
            return redirect(route('players.index'));
        } catch (\Exception $exception) {
            Toastr::error('message', 'Player was not removed successfully');
            return redirect(route('players.edit'));
        }
    }
}
