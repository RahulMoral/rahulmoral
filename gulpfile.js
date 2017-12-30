'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var csscomb = require('gulp-csscomb');
var pixelstorem = require('postcss-pixels-to-rem');

gulp.task('sass', function () {
    var plugins = [
        pixelstorem()
    ];
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss(plugins))
        // .pipe(csscomb())
        .pipe(gulp.dest('css'));
});

gulp.task('watch-sass', function () {
    livereload.listen();
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch-sass']);