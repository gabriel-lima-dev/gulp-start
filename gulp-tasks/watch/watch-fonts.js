module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return plugins.watch(path.join(paths.src_assets, folder, '/fonts/**'))
        .pipe(plugins.debug({ title: 'Watch Fonts files' }))
        .pipe(gulp.dest(paths.dest_assets + folder + '/fonts/'))
        .pipe(reload({stream: true}));
    });
    return merge(tasks);
  };
};
