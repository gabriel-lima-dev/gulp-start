module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return plugins.watch(path.join(paths.src_templates, folder, '/**'))
        .pipe(plugins.debug({ title: 'Watch Templates files' }))
        .pipe(gulp.dest(paths.dest_templates + folder))
        .pipe(reload({stream: true}));
    });
    return merge(tasks);
  };
};
