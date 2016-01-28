//Core Gulp File
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

//Compile sass to css files, to the given file name at the given file path.
global.minifySass = function (files, outputPath) {

    console.log("Minifing sass files:", files);

    return gulp.src(files)
         .pipe(plugins.sass())
         .pipe(gulp.dest(outputPath));    
};

//Combine css files and output to the given file name and file path.
global.combineCss = function (files, fileName, outputPath) {

    console.log("Combine css files:", files);

    return gulp.src(files)
         .pipe(plugins.concatCss(fileName))
         .pipe(gulp.dest(outputPath));        
};