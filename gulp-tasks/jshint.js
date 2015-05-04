module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return gulp.src(path.join(paths.src_assets, folder, '/javascripts/src/**/*.js'))
        .pipe(plugins.debug({ title: 'Hint Js files' }))
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter("fail"))
        .on('error', plugins.notify.onError({
          message: 'Error: <%= error.message %>'
          // sound: false
        }));
    });
    return merge(tasks);
  };
};
