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
        DB::unprepared("DROP procedure if exists newSpecies");
        DB::unprepared("CREATE procedure newSpecies

        @kingdom nvarchar(80),
        @phylum nvarchar(80),
        @class nvarchar(80),
        @order nvarchar(80),
        @family nvarchar(80),
        @genus nvarchar(80),
        @species nvarchar(80)
        as
        declare @k_id int, @p_id int, @c_id int, @o_id int, @f_id int, @g_id int, @s_id int
        declare @current_level int
        set @current_level = 0
        
        set @k_id = (select class_id from classifications where name = @kingdom)
        if @k_id is null
            begin
                insert into classifications values(@kingdom, @current_level, null, GETDATE(),GETDATE())
                set @k_id = IDENT_CURRENT('classifications')
            end
            set @current_level = @current_level + 1
        
        set @p_id = (select class_id from classifications where name = @phylum)
        if @p_id is null
            begin
                insert into classifications values(@phylum, @current_level, @k_id, GETDATE(),GETDATE())
                set @p_id = IDENT_CURRENT('classifications')
            end
            set @current_level = @current_level + 1
        
        set @c_id = (select class_id from classifications where name = @class)
        if @c_id is null
            begin
                insert into classifications values(@class, @current_level, @p_id, GETDATE(),GETDATE())
                set @c_id = IDENT_CURRENT('classifications')
            end
            set @current_level = @current_level + 1
        
        set @o_id = (select class_id from classifications where name = @order)
        if @o_id is null
            begin
                insert into classifications values(@order, @current_level, @c_id, GETDATE(),GETDATE())
                set @o_id = IDENT_CURRENT('classifications')
            end
            set @current_level = @current_level + 1
        
        set @f_id = (select class_id from classifications where name = @family)
        if @f_id is null
            begin
                insert into classifications values(@family, @current_level, @o_id, GETDATE(),GETDATE())
                set @f_id = IDENT_CURRENT('classifications')
            end
            set @current_level = @current_level + 1
        
        set @g_id = (select class_id from classifications where name = @genus)
        if @g_id is null
            begin
                insert into classifications values(@genus, @current_level, @f_id, GETDATE(),GETDATE())
                set @g_id = IDENT_CURRENT('classifications')
            end
            set @current_level = @current_level + 1
        
        set @s_id = (select class_id from classifications where name = @species)
        if @s_id is null
            begin
                insert into classifications values(@species, @current_level, @g_id, GETDATE(),GETDATE())
            end");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared("DROP procedure if exists newSpecies");
    }
};
