const mix = require('laravel-mix');

mix.sass('src/app.scss', 'public/dist/css')
   .js('src/app.js', 'public/dist/js');
