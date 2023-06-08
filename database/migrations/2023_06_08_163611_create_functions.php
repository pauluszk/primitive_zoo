<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // getLevel(int @class) -> int // returns the level of a classification
        DB::unprepared("DROP function IF EXISTS dbo.getLevel");
        DB::unprepared("CREATE function getLevel
       (
       @class int
       )
       returns int
       begin
           return (select level from classifications where class_id = @class)
       end");
        // maxLevel() -> int    # returns the maximum level of classifaction in the classifications table
        DB::unprepared("DROP function if exists dbo.maxLevel");
        DB::unprepared("CREATE function maxLevel
           (
           )
           returns int
           begin
           return (select max(level) from classifications)
           end
           ");
        // taxReq(int @animal) -> table  # returns the whole taxonomy for a given animal in the zoo
        DB::unprepared("drop function if exists dbo.taxReq");
        DB::unprepared("CREATE function taxReq
           (
           @animal int
           )
           returns table

           as

           return(
               with assistTable AS (
               select class_id, level, upper_class, c.name from classifications c inner join animals a on a.class = class_id where a.animal_id = @animal

               union all

               select classifications.class_id, classifications.level, classifications.upper_class, classifications.name from assistTable s inner join classifications on s.upper_class = classifications.class_id
               )
               select level, name from assistTable
               )");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared("DROP function IF EXISTS dbo.getLevel");
        DB::unprepared("DROP function if exists dbo.maxLevel");
        DB::unprepared("DROP function if exists dbo.taxReq");
    }
};
