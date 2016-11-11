<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->increments('id', true);
            $table->string('name','60')->unique();
            $table->string('url','100')->unique();
            $table->integer('priority',false,true)->length(11)->index();
            $table->integer('active',false,true)->length(11)->index();
            $table->string('keywords',250)->index();
            $table->text('descriptions');
            $table->timestamps();
            $table->softDeletes();
            $table->index(['name','url','priority']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('countries');
    }
}
