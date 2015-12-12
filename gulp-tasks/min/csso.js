module.exports = function(gulp, plugins, paths, merge, path) {
  return function () {
    paths.assets.map(function(folder) {
      return gulp.src(path.join(folder + '/css/app.css'))
      .pipe(plugins.debug({ title: 'Minifying CSS files' }))
      .pipe(plugins.bytediff.start())
      .pipe(plugins.csso())
      .pipe(plugins.rename('app.min.css'))
      .pipe(plugins.bytediff.stop())
      .pipe(gulp.dest(folder + '/css'));
    });
  };
};
