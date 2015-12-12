module.exports = function(gulp, plugins, paths, merge, path) {
  return function () {
    paths.assets.map(function(folder) {
      return gulp.src([
        path.join(folder + 'js/**/_*.js')
      ])
      .pipe(plugins.plumber())
      .pipe(plugins.debug({ title: 'Build Js files' }))
      .pipe(plugins.bytediff.start())
      .pipe(plugins.concat('app.js'))
      .pipe(plugins.bytediff.stop())
      .pipe(gulp.dest(folder + 'js/'));
    });
  };
};
