module.exports = function(gulp, plugin, config) {
  return function () {
    gulp.src([
      config.source.js
    ])
    .pipe(plugin.plumber())
    .pipe(plugin.debug({ title: 'Build Js files' }))
    .pipe(plugin.bytediff.start())
    .pipe(plugin.concat('app.js'))
    .pipe(plugin.bytediff.stop())
    .pipe(gulp.dest(config.dest.js));
  };
};
