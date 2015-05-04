module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return gulp.src(path.join(paths.src_assets, folder, '/images/*.{png,jpg,gif}'))
        .pipe(plugins.debug({ title: 'Minifying Images files' }))
        .pipe(plugins.imagemin({
          progressive: true
        }))
        .pipe(gulp.dest(paths.src_assets + folder + '/images/'));
    });
    return merge(tasks);
  };
};
