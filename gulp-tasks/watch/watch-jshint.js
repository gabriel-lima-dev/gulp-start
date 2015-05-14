module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return plugins.watch(path.join(paths.src_assets, folder, '/js/src/**/*.js'), function() {
        gulp.src(path.join(paths.src_assets, folder, '/js/src/**/*.js'))
        .pipe(plugins.plumber())
        .pipe(plugins.debug({ title: 'Hint Js files' }))
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jshint.reporter('fail'))
        .on('error', plugins.notify.onError({ sound: true }));
      });
    });
    return merge(tasks);
  };
};
