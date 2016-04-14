module.exports = function(gulp, plugin, config) {
  return function () {
    gulp.src(config.build.js + '*.js')
    .pipe(plugin.bytediff.start())
    .pipe(plugin.uglify())
    .pipe(plugin.bytediff.stop())
    .pipe(gulp.dest(config.build.js));
  };
};
