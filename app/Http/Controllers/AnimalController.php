<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function index()
    {
        return Animal::all();
    }
    public function show($id)
    {
        return Animal::find($id);
    }
    public function store(Request $request)
    {
        # code...
    }
    public function update(Request $request, $id)
    {
        # code...
    }
    public function delete($id)
    {
        # code...
    }
}
