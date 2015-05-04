module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return plugins.watch(path.join(paths.src_assets, folder, '/images/**/*.{png,jpg,gif}'))
        .pipe(plugins.debug({ title: 'Watch Image files' }))
        .pipe(plugins.imagemin({
          progressive: true
        }))
        .pipe(gulp.dest(paths.dest_assets + folder + '/images/'))
        .pipe(reload({stream: true}));
    });
    return merge(tasks);
  };
};
