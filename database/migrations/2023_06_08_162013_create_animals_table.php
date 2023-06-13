<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('animals', function (Blueprint $table) {
            $table->id('animal_id');
            $table->string('name', 80);
            $table->integer('class');
            $table->foreignId('owner')->references('id')->on('users')->nullable();
            $table->timestamps();
        });

        Schema::table('animals', function (Blueprint $table) {
            $table->foreign('class')->references('class_id')->on('classifications');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('animals');
    }
};
