module.exports = function(gulp, plugin, config) {
  return function () {
    gulp.src(config.build.css + '*.css')
    .pipe(plugin.bytediff.start())
    .pipe(plugin.csso())
    .pipe(plugin.bytediff.stop())
    .pipe(gulp.dest(config.build.css));
  };
};
