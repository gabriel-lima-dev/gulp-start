module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.src_locale + '**')
    	.pipe(plugins.debug({title: 'Copying Locale files'}))
      .pipe(gulp.dest(paths.dest_locale));
  };
};
