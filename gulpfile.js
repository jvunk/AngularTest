//Core Gulp File
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();
var del = require('del');

//Load in my Gulp core files for this site
requireDir("assets/gulp");

//Core angular files to minfiy for the site
global.coreSassFiles = [
    global.Angular.Material.scss
];

var tempCss = "build/**/*.css";

//Minify my scss files
gulp.task('minify.css', function (callback) {

    var filesToCombine = global.coreSassFiles;
    filesToCombine.push("app/**/*.scss");
    filesToCombine.push("assets/scss/**/*.scss");     

    minifySass(filesToCombine, global.paths.temp);
    combineCss(tempCss, "app.min.css", global.paths.dist);    
});

//Minify my scss files
gulp.task('clean.css', function () {

    //clear out the temp css files
    return del(tempCss);
});

//Core angular files to minfiy for the site
global.coreAngularFiles = [
    global.Angular.js,
    global.Angular.Sanitize.js,
    global.Angular.Route.js,
    global.Angular.Animate.js,
    global.Angular.Aria.js,
    global.Angular.Messages.js,
    global.Angular.Material.js
];

//Minify my js files
gulp.task('minify.js.angular', function () {

    var filesToCombine = global.coreAngularFiles;
    filesToCombine.push("app/**/*.js");

    minifyAngualrJS(filesToCombine, "app.min.js", global.paths.dist);
});

//Minify my html files
gulp.task('minify.html', function () {     

    minifyHtml("app/**/*.html", global.paths.dist);
});