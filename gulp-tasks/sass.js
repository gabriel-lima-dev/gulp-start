module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.src_scss + 'imports.scss')
      .pipe(plugins.sass({
        onError: function(error) {
          return plugins.notify().write(error);
        }
      }))
      .pipe(plugins.rename('app.css'))
      .pipe(gulp.dest(paths.dest_css))
      .pipe(reload({stream: true}));
    };
};
