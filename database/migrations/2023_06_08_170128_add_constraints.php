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

        #new class.level must be 0 and upper_class is null or one more than uperr_class.level's
        DB::unprepared("alter table classifications drop constraint if exists level_check");
        DB::unprepared("ALTER table classifications
        add constraint level_check check ((level = 0 and upper_class is null) 
        or 
        (level = dbo.getLevel(upper_class) + 1))");

        #animals class can only be the largest level (6)  
        DB::unprepared("alter table animals DROP CONSTRAINT IF EXISTS animal_level");
        DB::unprepared("alter table animals
        add constraint animal_level check (dbo.maxLevel() = dbo.getLevel(class))");
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared("alter table classifications drop constraint if exists level_check");
        DB::unprepared("alter table animals DROP CONSTRAINT IF EXISTS animal_level");
    }
};
