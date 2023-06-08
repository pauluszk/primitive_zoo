<?php

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
        Schema::create('classifications', function (Blueprint $table) {
            $table->integer('class_id', 1);
            $table->string('name', 80);
            $table->integer('level');
            $table->integer('upper_class')->nullable();
            $table->timestamps();
        });
        Schema::table('classifications', function (Blueprint $table) {
            $table->foreign('upper_class')->references('class_id')->on('classifications');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classifications');
    }
};
