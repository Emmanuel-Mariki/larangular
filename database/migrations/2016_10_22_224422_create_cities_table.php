<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->increments('id', true, true);
            $table->integer('country_id',false, true);
            $table->foreign('country_id','city_country_foreign')->references('id')->on('countries');
            $table->string('name',80)->unique();
            $table->string('url',100)->unique();
            $table->string('country',100);
            $table->integer('priority',false, true)->length(11)->nullable();
            $table->boolean('active');
            $table->string('keywords',250)->index()->nullable();
            $table->text('descriptions')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->index(['name','url','priority','country']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities');
    }
}
