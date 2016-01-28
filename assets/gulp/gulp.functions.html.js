//Core Gulp File
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();
var htmlmin = require('gulp-htmlmin');

//Minify html
global.minifyHtml = function (files, outputPath) {

    console.log("Minifing html files:", files);

    return gulp.src(files)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(outputPath))
};
