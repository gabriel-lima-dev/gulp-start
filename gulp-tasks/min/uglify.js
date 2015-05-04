module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return gulp.src(path.join(paths.src_assets, folder, '/js/dest/*.js'))
        .pipe(plugins.debug({ title: 'Minifying Js files' }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(paths.src_assets + folder + '/js/dest'));
    });
    return merge(tasks);
  };
};
