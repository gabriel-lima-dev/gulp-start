module.exports = function(gulp, plugins, paths, merge, path) {
  return function () {
    var folders = paths.assets.map(function(folder) {
      return plugins.watch(path.join(folder + '/js/**/_*.js'), function() {
        gulp.src([
          path.join(folder + 'js/**/_*.js')
        ])
        .pipe(plugins.plumber())
        .pipe(plugins.debug({ title: 'Watch Js files' }))
        .pipe(plugins.bytediff.start())
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.bytediff.stop())
        .pipe(gulp.dest(folder + 'js/'));
      });
    });
    return merge(folders);
  };
};
