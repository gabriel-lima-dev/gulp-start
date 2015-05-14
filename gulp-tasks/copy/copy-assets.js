module.exports = function(gulp, plugins, browserSync, reload, paths) {
  return function () {
    gulp.src(paths.src_assets + '/**')
		.pipe(plugins.debug({title: 'Copying Assets files'}))
		.pipe(gulp.dest(paths.dest_assets));
  };
};
