module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
   gulp.src([
      paths.src_js + 'components/*.js',
      paths.src_js + '*.js'
    ])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'));
  };
};
