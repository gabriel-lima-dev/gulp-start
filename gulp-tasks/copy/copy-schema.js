module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.src_schema + '**/*')
      .pipe(gulp.dest(paths.dest_schema));
  };
};
