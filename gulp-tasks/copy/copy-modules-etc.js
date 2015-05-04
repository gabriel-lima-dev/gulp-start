module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.src_modules + '/*.xml')
    	.pipe(plugins.debug({title: 'Copying Modules XML files'}))
		  .pipe(gulp.dest(paths.dest_modules_etc));
  };
};
