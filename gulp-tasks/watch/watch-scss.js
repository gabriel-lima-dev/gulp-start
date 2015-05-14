module.exports = function(gulp, plugins, browserSync, reload, paths, merge, path) {
  return function () {
    var folders = paths.themes_dir;
    var tasks = folders.map(function(folder) {
      return plugins.watch(path.join(paths.src_assets, folder, '/scss/**/*.scss'), function() {
        gulp.src(path.join(paths.src_assets, folder, '/scss/*.scss'))
          .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError({
              sound: false,
              message: "SHIT! - <%= error.message %>"
            })
          }))
          .pipe(plugins.debug({ title: 'Watch SCSS files' }))
          .pipe(plugins.sass())
          .pipe(plugins.autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
          }))
          .pipe(plugins.combineMq({ beautify: true }))
          .pipe(gulp.dest(paths.src_assets + folder + '/css/'))
          .pipe(gulp.dest(paths.dest_assets + folder + '/css/'))
          .pipe(reload({stream: true}));
      });
    });
    return merge(tasks);
  };
};
