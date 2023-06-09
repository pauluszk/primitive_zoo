<?php

use App\Models\Classification;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Classification::newTaxonomy("Animalia", "Arthropoda", "Insecta", "Hymenoptera", "Formicidae", "Lasius", "Lasius niger");
        Classification::newTaxonomy('Animalia', 'Arthropoda', 'Insecta', 'Flies', 'Syrphidae', 'Peradon', 'Peradon fenestratus');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
