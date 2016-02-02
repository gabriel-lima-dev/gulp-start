module.exports = function(gulp, plugin, config) {
  return function () {
    gulp.src(config.dest.css + '*.css')
    .pipe(plugin.debug({ title: 'Minifying CSS files' }))
    .pipe(plugin.bytediff.start())
    .pipe(plugin.csso())
    .pipe(plugin.rename('app.min.css'))
    .pipe(plugin.bytediff.stop())
    .pipe(gulp.dest(config.build.css));
  };
};
