module.exports = function(gulp, plugins, config) {
  return function () {
    gulp.src(config.dest.js + '*.js')
    .pipe(plugins.debug({ title: 'Minifying Js files' }))
    .pipe(plugins.bytediff.start())
    .pipe(plugins.uglify())
    .pipe(plugins.bytediff.stop())
    .pipe(plugins.rename('app.min.js'))
    .pipe(gulp.dest(config.build.js));
  };
};
