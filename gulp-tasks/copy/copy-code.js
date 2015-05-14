module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.src_code + '**')
    	.pipe(plugins.debug({title: 'Copying Code files'}))
      .pipe(gulp.dest(paths.dest_code));
  };
};
