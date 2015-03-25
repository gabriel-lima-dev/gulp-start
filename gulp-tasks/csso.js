module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.dest_css + 'app.css')
      .pipe(plugins.csso())
      .pipe(plugins.rename('app.min.css'))
      .pipe(gulp.dest(paths.dest_css));
  };
};
