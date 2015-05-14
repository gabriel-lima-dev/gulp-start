module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return gulp.src([
          paths.src_vendors + 'jquery/dist/jquery.js',
          paths.src_vendors + 'parsleyjs/dist/parsley.js',
          paths.src_vendors + 'parsleyjs/src/i18n/pt-br.js',
          path.join(paths.src_assets, folder, '/js/src/**/*.js')
        ])
        .pipe(plugins.debug({ title: 'Build Js files' }))
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(paths.src_assets + folder + '/js/dest'));
    });
    return merge(tasks);
  };
};
