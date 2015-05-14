module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return gulp.src(path.join(paths.src_assets, folder, '/scss/*.scss'))
        .pipe(plugins.plumber({
          errorHandler: plugins.notify.onError({
            sound: false,
            message: "SHIT! - <%= error.message %>"
          })
        }))
        .pipe(plugins.debug({ title: 'Build SCSS files' }))
        .pipe(plugins.sass())
        .pipe(gulp.dest(paths.src_assets + folder + '/css/'));
    });
    return merge(tasks);
  };
};
