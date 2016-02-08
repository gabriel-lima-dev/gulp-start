// Requires
// ------------------------------------------------
var gulp = require('gulp');
var gulpDir = "./gulp-tasks/";
var plugin = require('gulp-load-plugins')();
var config = require(gulpDir + 'config');

function getTask(task) {
  return require(gulpDir + task)(
    gulp,
    plugin,
    config
  );
}

// Tasks
// ------------------------------------------------

// Default
gulp.task('assets', [
  'sprite',
  'scss',
  'jshint'
  // 'concat'
]);

// Watches
gulp.task('watch', [
  'watch-sprite',
  'watch-scss',
  'watch-js'
]);

// Build
gulp.task('build', [
  'clear',
  'useref',
  'imagemin'
]);


// Default
gulp.task('default', ['assets', 'watch']);

// Dev
// ------------------------------------------------

// Stylesheet
gulp.task('scss', getTask('dev/scss'));

// Javascript
gulp.task('jshint', getTask('dev/jshint'));
// gulp.task('concat', getTask('dev/concat'));

// Images
gulp.task('sprite', getTask('dev/sprite'));

// Watch
gulp.task('watch-scss', function() {
  gulp.watch(config.source.scss.partials, ['scss']);
});

gulp.task('watch-js', function() {
  gulp.watch(config.source.js, ['concat']);
  gulp.watch(config.source.js, ['jshint']);
});

gulp.task('watch-sprite', function() {
  gulp.watch(config.source.imgSprite, ['sprite']);
});

// Build
// ------------------------------------------------
gulp.task('clear', getTask('build/clear'));
gulp.task('csso', getTask('build/csso'));
gulp.task('uglify', getTask('build/uglify'));
gulp.task('imagemin', getTask('build/imagemin'));
gulp.task('useref', getTask('build/useref'));
