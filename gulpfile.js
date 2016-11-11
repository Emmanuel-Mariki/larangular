
   /*const elixir = require('laravel-elixir');
const ElexitTypescript = require('elixir-typescript');
require('laravel-elixir-vue');
//require('elixir-typescript');

const gulp = require('gulp');
const   ts = require('gulp-typescript');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

   /*
elixir(mix => {
    mix.sass('app.scss')
    .webpack('app.js')
    .copy('node_modules/@angular', 'public/@angular')
    .copy('node_modules/anular2-in-memory-web-api', 'public/anular2-in-memory-web-api')
    .copy('node_modules/core-js', 'public/core-js')
    .copy('node_modules/reflect-metadata', 'public/reflect-metadata')
    .copy('node_modules/systemjs', 'public/systemjs')
    .copy('node_modules/rxjs', 'public/rxjs')
    .copy('node_modules/zone.js', 'public/zone.js')

        [
            'app.component.ts',
            'app.module.ts',
            'main.ts',
            'app.routing.ts',
            'types/type.ts',
            'types/type.component.ts',
            'types/type-form.component.ts',
            'types/type.service.ts',
            'types/type.module.ts'
        ],
        'public/app',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );
})
;*/

const gulp = require('gulp');
const   ts = require('gulp-typescript');


gulp.task('TYPESCRIPT', function () {
    return gulp.src(['resources/assets/typescript/**/*.ts','resources/assets/typescript/main.ts'])
        .pipe(ts({
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }))
        .pipe(gulp.dest('public/app'));
});


gulp.task('CSS', function () {
    return gulp.src('resources/assets/sass/**/*.scss')
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    return gulp.watch(
        ['resources/assets/typescript/**/*.ts','resources/assets/typescript/**/*.html'],
         ['TYPESCRIPT'])
});
gulp.task('default', ['TYPESCRIPT', 'CSS']);
