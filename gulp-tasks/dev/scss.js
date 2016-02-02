module.exports = function(gulp, plugin, config) {
  return function () {
    gulp.src(config.source.scss.main)
    .pipe(plugin.plumber({
      errorHandler: plugin.notify.onError({
        sound: false,
        message: "SHIT! - <%= error.message %>"
      })
    }))
    .pipe(plugin.debug({ title: 'Build SCSS files' }))
    .pipe(plugin.bytediff.start())
    .pipe(plugin.sass())
    .pipe(plugin.autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(plugin.bytediff.stop())
    .pipe(gulp.dest(config.dest.css));
  };
};
