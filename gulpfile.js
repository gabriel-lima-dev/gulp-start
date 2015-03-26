// Requires
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var paths = require('./paths.json');

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, browserSync, reload, paths);
}

// Single Tasks
gulp.task('copy', getTask('copy'));
gulp.task('sass', getTask('sass'));
gulp.task('csso', getTask('csso'));
gulp.task('concat', getTask('concat'));
gulp.task('sprite', getTask('sprite'));
gulp.task('jshint', getTask('jshint'));
gulp.task('uglify', getTask('uglify'));
gulp.task('imagemin', getTask('imagemin'));
gulp.task('browsersync', getTask('browsersync'));

// Sprite Build task
gulp.task('spriteBuild', ['sprite', 'sass']);

// Default task
gulp.task('default', ['jshint', 'concat', 'copy', 'sprite', 'sass', 'browsersync'], function() {
  gulp.watch(paths.src_scss + '**/*.scss', ['sass']);
  gulp.watch([paths.src_js + '**/*.js', paths.js + 'main.js'], ['concat']);
  gulp.watch(paths.root + '*.html').on('change', reload);
});

// Dist task
gulp.task('dist', ['uglify', 'csso', 'imagemin']);
