module.exports = function(gulp, plugins, paths, merge, path) {
  return function () {
    paths.assets.map(function(folder) {
      gulp.src([
        path.join(folder + '/js/**/_*.js')
      ])
      .pipe(plugins.plumber())
      .pipe(plugins.debug({ title: 'Hint Js files' }))
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.jshint.reporter('fail'))
      .on('error', plugins.notify.onError({ sound: true }));
    });
  };
};
