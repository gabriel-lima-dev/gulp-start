module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return plugins.watch(path.join(paths.src_assets, folder, '/js/src/**/*.js'), function() {
        gulp.src([
          paths.src_vendors + 'jquery/dist/jquery.js',
          paths.src_vendors + 'parsleyjs/dist/parsley.js',
          paths.src_vendors + 'jquery-infield-label/lib/jquery.infieldlabel.js',
          path.join(paths.src_assets, folder, '/js/src/**/*.js')
        ])
        .pipe(plugins.plumber())
        .pipe(plugins.debug({ title: 'Watch Js files' }))
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(paths.src_assets + folder + '/js/dest'))
        .pipe(gulp.dest(paths.dest_assets + folder + '/js/dest'))
        .pipe(reload({stream: true}));
      });
    });
    return merge(tasks);
  };
};
