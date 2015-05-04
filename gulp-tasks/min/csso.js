module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return gulp.src(path.join(paths.src_assets, folder, '/css/*.css'))
        .pipe(plugins.debug({ title: 'Minifying CSS files' }))
        .pipe(plugins.csso())
        .pipe(gulp.dest(paths.src_assets + folder + '/css/'));
    });
    return merge(tasks);
  };
};
