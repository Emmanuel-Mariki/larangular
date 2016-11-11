<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('type_id',false,true)->length(11)->index();
            $table->foreign('type_id')->references('id')->on('types')->onDelete('cascade');
            $table->integer('priority',false,true)->length(11)->index();
            $table->integer('active',false,true)->length(11)->index();
            $table->string('name',100)->unique()->index();
            $table->string('url',150)->unique()->index();
            $table->string('title',150)->unique()->index();
            $table->string('keywords',250)->index();
            $table->text('descriptions');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
