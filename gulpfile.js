// Requires
// ------------------------------------------------
var path = require('path');
var merge = require('merge-stream');

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var paths = require('./paths.json');

function getTask(task) {
  return require('./gulp-tasks/' + task)(
    gulp,
    plugins,
    browserSync,
    reload,
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
  'sass',
  'jshint',
  'concat'
]);

// Copies
gulp.task('copies', [
  'copy-code',
  'copy-modules',
  'copy-modules-etc',
  'copy-templates',
  'copy-assets',
  'copy-locale'
  //'copy-schema'
]);

// Watches
gulp.task('watch', [
  'watch-images',
  'watch-sprite-images',
  'watch-scss',
  'watch-js',
  'watch-jshint',
  'watch-fonts',
  'watch-templates',
  'watch-modules',
  'watch-locale'
]);

// Build
gulp.task('build', ['assets', 'copies']);

// Default
gulp.task('default', ['build', 'watch', 'browsersync']);

// Minify
gulp.task('min', ['uglify', 'csso', 'imagemin']);

// Single Tasks
// ------------------------------------------------

// Stylesheet
gulp.task('sass', getTask('sass'));
gulp.task('csso', getTask('min/csso'));

// Javascript
gulp.task('jshint', getTask('jshint'));
gulp.task('concat', getTask('concat'));
gulp.task('uglify', getTask('min/uglify'));

// Images
gulp.task('sprite', getTask('sprite'));
gulp.task('imagemin', getTask('min/imagemin'));

// Copy
gulp.task('copy-code', getTask('copy/copy-code'));
gulp.task('copy-assets', getTask('copy/copy-assets'));
gulp.task('copy-locale', getTask('copy/copy-locale'));
gulp.task('copy-modules', getTask('copy/copy-modules'));
gulp.task('copy-templates', getTask('copy/copy-templates'));
gulp.task('copy-modules-etc', getTask('copy/copy-modules-etc'));

// Watch
gulp.task('watch-js', getTask('watch/watch-js'));
gulp.task('watch-scss', getTask('watch/watch-scss'));
gulp.task('watch-fonts', getTask('watch/watch-fonts'));
gulp.task('watch-jshint', getTask('watch/watch-jshint'));
gulp.task('watch-images', getTask('watch/watch-images'));
gulp.task('watch-sprite-images', getTask('watch/watch-sprite-images'));

gulp.task('watch-locale', getTask('watch/watch-locale'));
gulp.task('watch-modules', getTask('watch/watch-modules'));
gulp.task('watch-templates', getTask('watch/watch-templates'));

// Others
gulp.task('bump', getTask('bump'));
gulp.task('browsersync', getTask('browsersync'));
