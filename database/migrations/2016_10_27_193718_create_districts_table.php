<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDistrictsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('districts', function (Blueprint $table) {
            $table->increments('id', true, true);
            $table->integer('country_id',false, true);
            $table->foreign('country_id','district_country_foreign')
                  ->references('id')->on('countries');
            $table->integer('city_id',false, true);
            $table->foreign('city_id','city_district_foreign')
                  ->references('id')->on('cities');
            $table->string('name',80)->unique();
            $table->string('url',100)->unique();
            $table->string('country',100);
            $table->string('city',100);
            $table->integer('priority',false, true)->length(11)->nullable();
            $table->boolean('active');
            $table->string('keywords',250)->index()->nullable();
            $table->text('descriptions')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->index(['name','url','priority','country','city']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('districts');
    }
}
