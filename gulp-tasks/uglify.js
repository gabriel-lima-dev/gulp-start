module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.dest_js + 'app.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename('app.min.js'))
    .pipe(gulp.dest(paths.dest_js))
  };
};
