const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 // points to app.jsx in the react-app (located within resources)
mix.js('resources/js/src/components/index.jsx', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

mix.copy('resources/public', 'public');