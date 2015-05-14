module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.src_modules + '/**')
    	.pipe(plugins.debug({title: 'Copying Modules files'}))
      .pipe(gulp.dest(paths.dest_modules));
  };
};
