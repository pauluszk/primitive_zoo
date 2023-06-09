<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Classification extends Model
{
    use HasFactory;

    protected $primaryKey = 'class_id';

    protected $fillable = ['name', 'level', 'upper_class'];

    public static function newTaxonomy($kingdom, $phylum, $class, $order, $family, $genus, $species)
    {
        $query = "exec dbo.newSpecies ?, ?, ?, ?, ?, ?, ?";
        DB::statement($query, [$kingdom, $phylum, $class, $order, $family, $genus, $species]);
    }
}
