module.exports = function(gulp, plugin, config) {
  return function () {
    gulp.src([
      config.source.js
    ])
    .pipe(plugin.plumber())
    .pipe(plugin.debug({ title: 'Hint Js files' }))
    .pipe(plugin.jshint())
    .pipe(plugin.jshint.reporter('jshint-stylish'))
    .pipe(plugin.jshint.reporter('fail'))
    .on('error', plugin.notify.onError({ sound: true }));
  };
};
