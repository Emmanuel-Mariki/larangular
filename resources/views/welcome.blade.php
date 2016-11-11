<!DOCTYPE html>
<html lang="en">
    <head>
        <base href="/">
        <meta charset="utf-8">
        <meta property="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--<link href="https://fonts.googleapis.com/css?family=Taviraj:700,800" rel="stylesheet">-->

        <title>Peruzi</title>

        {{ Html::style('public/css/app.css') }}
        {{ Html::style('public/css/main.css') }}
        {{ Html::style('public/fonts/css/font-awesome.min.css') }}
        <!-- 1. Load libraries -->
        <!-- Polyfill(s) for older browsers -->
        {{ Html::script('public/core-js/client/shim.min.js') }}
        {{ Html::script('public/zone.js/dist/zone.js') }}
        {{ Html::script('public/reflect-metadata/Reflect.js') }}
        {{ Html::script('public/systemjs/dist/system.src.js') }}
        {{ Html::script('public/systemjs.config.js') }}

        <script>
            System.import('app').catch(function(err){ console.error(err); });
        </script>
    </head>
    <!-- 3. Display the application -->
    <body>
    <my-app>
        <div class="container">
            <div class="col-md-6 col-md-offset-3" style="margin-top:20%;">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="row">
                            <div class="col-md-3 col-md-offset-3">
                                <i class="fa fa-spinner fa-5x" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </my-app>
        {{ Html::script('public/js/jquery.min.js') }}
        {{ Html::script('public/js/bootstrap.min.js') }}
    </body>
</html>