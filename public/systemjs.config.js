/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({

        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'larangular/public/app',
            // angular bundles
            '@angular/core': 'larangular/node_modules/@angular/core/bundles/core.umd.js',
            '@angular/common': 'larangular/node_modules/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'larangular/node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'larangular/node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'larangular/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'larangular/node_modules/@angular/http/bundles/http.umd.js',
            '@angular/router': 'larangular/node_modules/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'larangular/node_modules/@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                       'larangular/node_modules/rxjs',
            'angular2-in-memory-web-api': 'larangular/node_modules/angular2-in-memory-web-api',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
