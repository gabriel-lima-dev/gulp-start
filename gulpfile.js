// Requires
// ------------------------------------------------
var path = require('path');
var merge = require('merge-stream');

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./paths.json');

function getTask(task) {
  return require('./gulp-tasks/' + task)(
    gulp,
    plugins,
    paths,
    merge,
    path
  );
}

// Tasks
// ------------------------------------------------

// Default
gulp.task('assets', [
  'sprite',
  'scss',
  'jshint',
  'concat'
]);

// Watches
gulp.task('watch', [
  'watch-sprite',
  'watch-scss',
  'watch-jshint',
  'watch-js'
]);

// Min
gulp.task('min', [
  'csso',
  'uglify',
  'imagemin'
]);

// Default
gulp.task('default', ['assets', 'watch']);

// Single Tasks
// ------------------------------------------------

// Stylesheet
gulp.task('scss', getTask('scss'));

// Javascript
gulp.task('jshint', getTask('jshint'));
gulp.task('concat', getTask('concat'));

// Images
gulp.task('sprite', getTask('sprite'));

// Watch
gulp.task('watch-js', getTask('watch/watch-js'));
gulp.task('watch-scss', getTask('watch/watch-scss'));
gulp.task('watch-jshint', getTask('watch/watch-jshint'));
gulp.task('watch-sprite', getTask('watch/watch-sprite'));

// Min
gulp.task('csso', getTask('min/csso'));
gulp.task('uglify', getTask('min/uglify'));
gulp.task('imagemin', getTask('min/imagemin'));
