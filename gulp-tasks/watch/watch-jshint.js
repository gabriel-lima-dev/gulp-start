module.exports = function(gulp, plugins, paths, merge, path) {
  return function () {
    var folders = paths.assets.map(function(folder) {
      return plugins.watch(path.join(folder + '/js/**/_*.js'), function() {
        gulp.src([
          path.join(folder + '/js/**/_*.js')
        ])
        .pipe(plugins.plumber())
        .pipe(plugins.debug({ title: 'Watch/Hint Js files' }))
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jshint.reporter('fail'))
        .on('error', plugins.notify.onError({ sound: true }));
      });
    });
    return merge(folders);
  };
};
