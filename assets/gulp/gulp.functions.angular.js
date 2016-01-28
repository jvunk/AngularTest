//Core Gulp File
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

//Minfiy and combine js files, to the given file name at the given file path.
global.minifyAngualrJS = function (files, fileName, outputPath) {

    console.log("Compiling angular js files:", files);

    return gulp.src(files)
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.concat(fileName))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(outputPath));        
};