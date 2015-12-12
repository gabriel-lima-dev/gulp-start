module.exports = function(gulp, plugins, paths, merge, path) {
  return function () {
    paths.assets.map(function(folder) {
      return gulp.src(path.join(folder + '/js/app.js'))
        .pipe(plugins.debug({ title: 'Minifying Js files' }))
        .pipe(plugins.bytediff.start())
        .pipe(plugins.uglify())
        .pipe(plugins.bytediff.stop())
        .pipe(plugins.rename('app.min.js'))
        .pipe(gulp.dest(folder + '/js/'));
    });
  };
};
