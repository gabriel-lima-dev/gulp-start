module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return gulp.src(path.join(paths.src_assets, folder, '/scss/*.scss'))
        .pipe(plugins.debug({ title: 'Build SCSS files' }))
        .pipe(plugins.sass({
          onError: function(error) {
            return plugins.notify().write(error);
          }
        }))
        .pipe(gulp.dest(paths.src_assets + folder + '/css/'));
    });
    return merge(tasks);
  };
};
