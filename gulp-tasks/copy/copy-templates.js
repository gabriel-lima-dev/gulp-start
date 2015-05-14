module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.src_templates + '/**')
    	.pipe(plugins.debug({title: 'Copying Templates files'}))
      .pipe(gulp.dest(paths.dest_templates));
  };
};
